const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const lucide = require('lucide-react');

const baseDir = path.join(__dirname, '../src/icons');
const CATEGORIES = ['General', 'Commerce', 'System', 'Tech', 'Nav'];

// Helper to check if file already exists
const existingFiles = new Set();
const scanExisting = (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      scanExisting(fullPath);
    } else if (f.endsWith('.jsx')) {
      existingFiles.add(f.replace('.jsx', ''));
    }
  }
};
scanExisting(baseDir);

let addedCount = 0;
const targetAdd = 173; // We have 27 already, getting to 200

console.log(`Currently have ${existingFiles.size} icons. Generating ${targetAdd} more...`);

const iconNames = Object.keys(lucide).filter(key => 
  key !== 'createLucideIcon' && 
  key !== 'default' && 
  key !== 'LucideProps' &&
  !key.endsWith('Icon') &&
  !key.endsWith('Provider')
);

const indexExports = [];
// First add all existing files to index exports
for (const cat of CATEGORIES) {
  const catDir = path.join(baseDir, cat);
  if (fs.existsSync(catDir)) {
    const files = fs.readdirSync(catDir);
    for (const f of files) {
      if (f.endsWith('.jsx')) {
        const name = f.replace('.jsx', '');
        indexExports.push(`export { default as ${name} } from './icons/${cat}/${name}.jsx';`);
      }
    }
  }
}

let catIdx = 0;

for (const name of iconNames) {
  if (addedCount >= targetAdd) break;
  if (existingFiles.has(name)) continue;
  
  const IconComponent = lucide[name];
  if (!IconComponent || typeof IconComponent !== 'object' || !IconComponent.render) continue;
  
  try {
    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(IconComponent));
    
    // Check if it ONLY contains paths (no circles, rects, lines, polygons, etc.)
    const hasOtherTags = /<(circle|rect|line|polygon|polyline)/.test(html);
    if (hasOtherTags) continue;
    
    // Extract paths
    const pathRegex = /<path[^>]*d="([^"]+)"[^>]*>/g;
    let match;
    const paths = [];
    while ((match = pathRegex.exec(html)) !== null) {
      paths.push(match[1]);
    }
    
    if (paths.length === 0) continue;
    
    const category = CATEGORIES[catIdx % CATEGORIES.length];
    catIdx++;
    
    const iconObj = {
      id: name.toLowerCase(),
      name: name,
      category: category,
      type: 'standard',
      paths: paths
    };
    
    const formattedPaths = paths.map(p => `      <path d="${p}" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />`).join('\n');
    
    const fileContent = `import React from 'react';

export const iconData = ${JSON.stringify(iconObj, null, 2)};

export const ${name} = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
${formattedPaths}
    </svg>
  );
};

export default ${name};
`;

    const destDir = path.join(baseDir, category);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    
    fs.writeFileSync(path.join(destDir, `${name}.jsx`), fileContent);
    indexExports.push(`export { default as ${name} } from './icons/${category}/${name}.jsx';`);
    
    addedCount++;
  } catch (err) {
    // skip failed renders
  }
}

// Write src/index.js
fs.writeFileSync(path.join(__dirname, '../src/index.js'), indexExports.join('\n') + '\n');
console.log(`Added ${addedCount} new icons. Generated src/index.js with ${indexExports.length} total exports.`);

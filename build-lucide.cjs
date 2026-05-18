const fs = require('fs');
const path = require('path');
const lucide = require('lucide');

const iconsDir = path.join(__dirname, 'src', 'icons');

// Clear existing icons directory
if (fs.existsSync(iconsDir)) {
  fs.rmSync(iconsDir, { recursive: true, force: true });
}

fs.mkdirSync(iconsDir, { recursive: true });

const toPascalCase = (str) => {
  return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
};

const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
};

const icons = Object.entries(lucide.icons);
console.log(`Generating ${icons.length} icons from Lucide...`);

icons.forEach(([name, nodes]) => {
  // Determine category by first letter to avoid one massive folder
  const firstLetter = name.charAt(0).toUpperCase();
  let category = firstLetter;
  // Fallback to General if something is weird
  if (!/[A-Z]/.test(category)) category = 'Other';

  const catDir = path.join(iconsDir, category);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  // Nodes are like [ [ 'path', { d: '...', ... } ], ... ]
  // We need to generate the JSX markup
  const jsxElements = nodes.map(([tag, attrs], idx) => {
    const props = Object.entries(attrs).map(([k, v]) => {
      let val = v;
      if (k === 'class') k = 'className';
      if (k === 'stroke-width' || k === 'stroke-linecap' || k === 'stroke-linejoin') {
        const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${reactKey}="${val}"`;
      }
      return `${k}="${val}"`;
    }).join(' ');
    // Override color/size props dynamically in the component
    return `      <${tag} ${props} fill={renderStyle === 'solid' ? color : 'none'} stroke={renderStyle === 'outline' ? color : 'none'} strokeWidth={renderStyle === 'outline' ? strokeWidth : undefined} />`;
  }).join('\n');

  // Simple JSX elements for the raw export
  const rawJsxElements = nodes.map(([tag, attrs]) => {
    const props = Object.entries(attrs).map(([k, v]) => {
      const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${reactKey}="${v}"`;
    }).join(' ');
    return `      <${tag} ${props} />`;
  }).join('\n');

  const componentCode = `import React from 'react';

export const iconData = {
  id: "${name}",
  name: "${name}",
  category: "${category}",
  nodes: ${JSON.stringify(nodes)}
};

export const ${name} = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
${rawJsxElements}
      {children}
    </svg>
  );
});

export default ${name};
`;

  fs.writeFileSync(path.join(catDir, `${name}.jsx`), componentCode);
});

const indexContent = icons.map(([name]) => {
  const firstLetter = name.charAt(0).toUpperCase();
  let category = firstLetter;
  if (!/[A-Z]/.test(category)) category = 'Other';
  return `export { default as ${name} } from './icons/${category}/${name}.jsx';`;
}).join('\n');

fs.writeFileSync(path.join(__dirname, 'src', 'index.js'), indexContent);

console.log('All icons generated successfully!');

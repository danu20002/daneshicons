const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');
const match = content.match(/const FALLBACK_ICONS = (\[[\s\S]*?\]);/);
if (match) {
  const icons = eval(match[1]);
  const baseDir = 'src/icons';
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
  
  icons.forEach(icon => {
    const dir = baseDir + '/' + icon.category;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    // We create the actual JSX paths just for completeness, using the first path setup
    const paths = icon.paths.map(p => `      <path d="${p}" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />`).join('\n');
    
    const fileContent = `import React from 'react';

export const iconData = ${JSON.stringify(icon, null, 2)};

export const ${icon.name} = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
${paths}
    </svg>
  );
};

export default ${icon.name};
`;
    fs.writeFileSync(dir + '/' + icon.name + '.jsx', fileContent);
  });
  console.log('Generated ' + icons.length + ' icons!');
} else {
  console.log('Could not find FALLBACK_ICONS');
}

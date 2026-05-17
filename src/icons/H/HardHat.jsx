import React from 'react';

export const iconData = {
  id: "HardHat",
  name: "HardHat",
  category: "H",
  nodes: [["path",{"d":"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{"d":"M14 6a6 6 0 0 1 6 6v3"}],["path",{"d":"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{"x":"2","y":"15","width":"20","height":"4","rx":"1"}]]
};

export const HardHat = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </svg>
  );
};

export default HardHat;

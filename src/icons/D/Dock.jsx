import React from 'react';

export const iconData = {
  id: "Dock",
  name: "Dock",
  category: "D",
  nodes: [["path",{"d":"M2 8h20"}],["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M6 16h12"}]]
};

export const Dock = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  );
};

export default Dock;

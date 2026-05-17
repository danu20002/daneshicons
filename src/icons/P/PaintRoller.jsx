import React from 'react';

export const iconData = {
  id: "PaintRoller",
  name: "PaintRoller",
  category: "P",
  nodes: [["rect",{"width":"16","height":"6","x":"2","y":"2","rx":"2"}],["path",{"d":"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{"width":"4","height":"6","x":"8","y":"16","rx":"1"}]]
};

export const PaintRoller = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="16" height="6" x="2" y="2" rx="2" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect width="4" height="6" x="8" y="16" rx="1" />
    </svg>
  );
};

export default PaintRoller;

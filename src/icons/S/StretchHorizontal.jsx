import React from 'react';

export const iconData = {
  id: "StretchHorizontal",
  name: "StretchHorizontal",
  category: "S",
  nodes: [["rect",{"width":"20","height":"6","x":"2","y":"4","rx":"2"}],["rect",{"width":"20","height":"6","x":"2","y":"14","rx":"2"}]]
};

export const StretchHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="6" x="2" y="4" rx="2" />
      <rect width="20" height="6" x="2" y="14" rx="2" />
    </svg>
  );
};

export default StretchHorizontal;

import React from 'react';

export const iconData = {
  id: "StretchVertical",
  name: "StretchVertical",
  category: "S",
  nodes: [["rect",{"width":"6","height":"20","x":"4","y":"2","rx":"2"}],["rect",{"width":"6","height":"20","x":"14","y":"2","rx":"2"}]]
};

export const StretchVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
    </svg>
  );
};

export default StretchVertical;

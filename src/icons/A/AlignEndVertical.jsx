import React from 'react';

export const iconData = {
  id: "AlignEndVertical",
  name: "AlignEndVertical",
  category: "A",
  nodes: [["rect",{"width":"16","height":"6","x":"2","y":"4","rx":"2"}],["rect",{"width":"9","height":"6","x":"9","y":"14","rx":"2"}],["path",{"d":"M22 22V2"}]]
};

export const AlignEndVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="16" height="6" x="2" y="4" rx="2" />
      <rect width="9" height="6" x="9" y="14" rx="2" />
      <path d="M22 22V2" />
    </svg>
  );
};

export default AlignEndVertical;

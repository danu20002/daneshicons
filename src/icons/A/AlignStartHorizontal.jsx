import React from 'react';

export const iconData = {
  id: "AlignStartHorizontal",
  name: "AlignStartHorizontal",
  category: "A",
  nodes: [["rect",{"width":"6","height":"16","x":"4","y":"6","rx":"2"}],["rect",{"width":"6","height":"9","x":"14","y":"6","rx":"2"}],["path",{"d":"M22 2H2"}]]
};

export const AlignStartHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="6" height="16" x="4" y="6" rx="2" />
      <rect width="6" height="9" x="14" y="6" rx="2" />
      <path d="M22 2H2" />
    </svg>
  );
};

export default AlignStartHorizontal;

import React from 'react';

export const iconData = {
  id: "AlignStartVertical",
  name: "AlignStartVertical",
  category: "A",
  nodes: [["rect",{"width":"9","height":"6","x":"6","y":"14","rx":"2"}],["rect",{"width":"16","height":"6","x":"6","y":"4","rx":"2"}],["path",{"d":"M2 2v20"}]]
};

export const AlignStartVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="9" height="6" x="6" y="14" rx="2" />
      <rect width="16" height="6" x="6" y="4" rx="2" />
      <path d="M2 2v20" />
    </svg>
  );
};

export default AlignStartVertical;

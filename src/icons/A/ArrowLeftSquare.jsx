import React from 'react';

export const iconData = {
  id: "ArrowLeftSquare",
  name: "ArrowLeftSquare",
  category: "A",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"m12 8-4 4 4 4"}],["path",{"d":"M16 12H8"}]]
};

export const ArrowLeftSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </svg>
  );
};

export default ArrowLeftSquare;

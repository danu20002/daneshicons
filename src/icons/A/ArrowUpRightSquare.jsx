import React from 'react';

export const iconData = {
  id: "ArrowUpRightSquare",
  name: "ArrowUpRightSquare",
  category: "A",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M8 8h8v8"}],["path",{"d":"m8 16 8-8"}]]
};

export const ArrowUpRightSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M8 8h8v8" />
      <path d="m8 16 8-8" />
    </svg>
  );
};

export default ArrowUpRightSquare;

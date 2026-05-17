import React from 'react';

export const iconData = {
  id: "SquareSquare",
  name: "SquareSquare",
  category: "S",
  nodes: [["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}],["rect",{"x":"8","y":"8","width":"8","height":"8","rx":"1"}]]
};

export const SquareSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  );
};

export default SquareSquare;

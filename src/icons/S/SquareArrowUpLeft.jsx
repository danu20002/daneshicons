import React from 'react';

export const iconData = {
  id: "SquareArrowUpLeft",
  name: "SquareArrowUpLeft",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M8 16V8h8"}],["path",{"d":"M16 16 8 8"}]]
};

export const SquareArrowUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M8 16V8h8" />
      <path d="M16 16 8 8" />
    </svg>
  );
};

export default SquareArrowUpLeft;

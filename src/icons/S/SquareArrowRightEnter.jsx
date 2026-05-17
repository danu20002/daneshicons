import React from 'react';

export const iconData = {
  id: "SquareArrowRightEnter",
  name: "SquareArrowRightEnter",
  category: "S",
  nodes: [["path",{"d":"m10 16 4-4-4-4"}],["path",{"d":"M3 12h11"}],["path",{"d":"M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}]]
};

export const SquareArrowRightEnter = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m10 16 4-4-4-4" />
      <path d="M3 12h11" />
      <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
    </svg>
  );
};

export default SquareArrowRightEnter;

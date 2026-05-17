import React from 'react';

export const iconData = {
  id: "SquareArrowRightExit",
  name: "SquareArrowRightExit",
  category: "S",
  nodes: [["path",{"d":"M10 12h11"}],["path",{"d":"m17 16 4-4-4-4"}],["path",{"d":"M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"}]]
};

export const SquareArrowRightExit = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 12h11" />
      <path d="m17 16 4-4-4-4" />
      <path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />
    </svg>
  );
};

export default SquareArrowRightExit;

import React from 'react';

export const iconData = {
  id: "SquareArrowOutUpLeft",
  name: "SquareArrowOutUpLeft",
  category: "S",
  nodes: [["path",{"d":"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{"d":"m3 3 9 9"}],["path",{"d":"M3 9V3h6"}]]
};

export const SquareArrowOutUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
      <path d="m3 3 9 9" />
      <path d="M3 9V3h6" />
    </svg>
  );
};

export default SquareArrowOutUpLeft;

import React from 'react';

export const iconData = {
  id: "SquareRoundCorner",
  name: "SquareRoundCorner",
  category: "S",
  nodes: [["path",{"d":"M21 11a8 8 0 0 0-8-8"}],["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]]
};

export const SquareRoundCorner = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 11a8 8 0 0 0-8-8" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  );
};

export default SquareRoundCorner;

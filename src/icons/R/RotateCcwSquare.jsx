import React from 'react';

export const iconData = {
  id: "RotateCcwSquare",
  name: "RotateCcwSquare",
  category: "R",
  nodes: [["path",{"d":"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{"d":"m15 2-3 3 3 3"}],["path",{"d":"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]]
};

export const RotateCcwSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 9V7a2 2 0 0 0-2-2h-6" />
      <path d="m15 2-3 3 3 3" />
      <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    </svg>
  );
};

export default RotateCcwSquare;

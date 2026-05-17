import React from 'react';

export const iconData = {
  id: "SplitSquareVertical",
  name: "SplitSquareVertical",
  category: "S",
  nodes: [["path",{"d":"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{"d":"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}]]
};

export const SplitSquareVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
      <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  );
};

export default SplitSquareVertical;

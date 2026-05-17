import React from 'react';

export const iconData = {
  id: "ArrowLeftToLine",
  name: "ArrowLeftToLine",
  category: "A",
  nodes: [["path",{"d":"M3 19V5"}],["path",{"d":"m13 6-6 6 6 6"}],["path",{"d":"M7 12h14"}]]
};

export const ArrowLeftToLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 19V5" />
      <path d="m13 6-6 6 6 6" />
      <path d="M7 12h14" />
    </svg>
  );
};

export default ArrowLeftToLine;

import React from 'react';

export const iconData = {
  id: "ArrowRightToLine",
  name: "ArrowRightToLine",
  category: "A",
  nodes: [["path",{"d":"M17 12H3"}],["path",{"d":"m11 18 6-6-6-6"}],["path",{"d":"M21 5v14"}]]
};

export const ArrowRightToLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 12H3" />
      <path d="m11 18 6-6-6-6" />
      <path d="M21 5v14" />
    </svg>
  );
};

export default ArrowRightToLine;

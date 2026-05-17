import React from 'react';

export const iconData = {
  id: "ArrowLeftFromLine",
  name: "ArrowLeftFromLine",
  category: "A",
  nodes: [["path",{"d":"m9 6-6 6 6 6"}],["path",{"d":"M3 12h14"}],["path",{"d":"M21 19V5"}]]
};

export const ArrowLeftFromLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m9 6-6 6 6 6" />
      <path d="M3 12h14" />
      <path d="M21 19V5" />
    </svg>
  );
};

export default ArrowLeftFromLine;

import React from 'react';

export const iconData = {
  id: "ArrowRightFromLine",
  name: "ArrowRightFromLine",
  category: "A",
  nodes: [["path",{"d":"M3 5v14"}],["path",{"d":"M21 12H7"}],["path",{"d":"m15 18 6-6-6-6"}]]
};

export const ArrowRightFromLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5v14" />
      <path d="M21 12H7" />
      <path d="m15 18 6-6-6-6" />
    </svg>
  );
};

export default ArrowRightFromLine;

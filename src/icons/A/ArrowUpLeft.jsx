import React from 'react';

export const iconData = {
  id: "ArrowUpLeft",
  name: "ArrowUpLeft",
  category: "A",
  nodes: [["path",{"d":"M7 17V7h10"}],["path",{"d":"M17 17 7 7"}]]
};

export const ArrowUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 17V7h10" />
      <path d="M17 17 7 7" />
    </svg>
  );
};

export default ArrowUpLeft;

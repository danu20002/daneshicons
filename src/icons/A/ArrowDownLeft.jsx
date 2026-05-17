import React from 'react';

export const iconData = {
  id: "ArrowDownLeft",
  name: "ArrowDownLeft",
  category: "A",
  nodes: [["path",{"d":"M17 7 7 17"}],["path",{"d":"M17 17H7V7"}]]
};

export const ArrowDownLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 7 7 17" />
      <path d="M17 17H7V7" />
    </svg>
  );
};

export default ArrowDownLeft;

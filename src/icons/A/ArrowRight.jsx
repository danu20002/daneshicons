import React from 'react';

export const iconData = {
  id: "ArrowRight",
  name: "ArrowRight",
  category: "A",
  nodes: [["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]]
};

export const ArrowRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};

export default ArrowRight;

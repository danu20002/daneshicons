import React from 'react';

export const iconData = {
  id: "ChevronLast",
  name: "ChevronLast",
  category: "C",
  nodes: [["path",{"d":"m7 18 6-6-6-6"}],["path",{"d":"M17 6v12"}]]
};

export const ChevronLast = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 18 6-6-6-6" />
      <path d="M17 6v12" />
    </svg>
  );
};

export default ChevronLast;

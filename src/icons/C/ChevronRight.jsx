import React from 'react';

export const iconData = {
  id: "ChevronRight",
  name: "ChevronRight",
  category: "C",
  nodes: [["path",{"d":"m9 18 6-6-6-6"}]]
};

export const ChevronRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export default ChevronRight;

import React from 'react';

export const iconData = {
  id: "ChevronUp",
  name: "ChevronUp",
  category: "C",
  nodes: [["path",{"d":"m18 15-6-6-6 6"}]]
};

export const ChevronUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

export default ChevronUp;

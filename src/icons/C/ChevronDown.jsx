import React from 'react';

export const iconData = {
  id: "ChevronDown",
  name: "ChevronDown",
  category: "C",
  nodes: [["path",{"d":"m6 9 6 6 6-6"}]]
};

export const ChevronDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

export default ChevronDown;

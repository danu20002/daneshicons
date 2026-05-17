import React from 'react';

export const iconData = {
  id: "ChevronsLeftRight",
  name: "ChevronsLeftRight",
  category: "C",
  nodes: [["path",{"d":"m9 7-5 5 5 5"}],["path",{"d":"m15 7 5 5-5 5"}]]
};

export const ChevronsLeftRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m9 7-5 5 5 5" />
      <path d="m15 7 5 5-5 5" />
    </svg>
  );
};

export default ChevronsLeftRight;

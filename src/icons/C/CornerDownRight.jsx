import React from 'react';

export const iconData = {
  id: "CornerDownRight",
  name: "CornerDownRight",
  category: "C",
  nodes: [["path",{"d":"m15 10 5 5-5 5"}],["path",{"d":"M4 4v7a4 4 0 0 0 4 4h12"}]]
};

export const CornerDownRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 10 5 5-5 5" />
      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </svg>
  );
};

export default CornerDownRight;

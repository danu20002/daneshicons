import React from 'react';

export const iconData = {
  id: "MoveLeft",
  name: "MoveLeft",
  category: "M",
  nodes: [["path",{"d":"M6 8L2 12L6 16"}],["path",{"d":"M2 12H22"}]]
};

export const MoveLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  );
};

export default MoveLeft;

import React from 'react';

export const iconData = {
  id: "MoveRight",
  name: "MoveRight",
  category: "M",
  nodes: [["path",{"d":"M18 8L22 12L18 16"}],["path",{"d":"M2 12H22"}]]
};

export const MoveRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
};

export default MoveRight;

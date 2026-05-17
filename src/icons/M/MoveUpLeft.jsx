import React from 'react';

export const iconData = {
  id: "MoveUpLeft",
  name: "MoveUpLeft",
  category: "M",
  nodes: [["path",{"d":"M5 11V5H11"}],["path",{"d":"M5 5L19 19"}]]
};

export const MoveUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 11V5H11" />
      <path d="M5 5L19 19" />
    </svg>
  );
};

export default MoveUpLeft;

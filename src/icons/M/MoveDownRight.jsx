import React from 'react';

export const iconData = {
  id: "MoveDownRight",
  name: "MoveDownRight",
  category: "M",
  nodes: [["path",{"d":"M19 13V19H13"}],["path",{"d":"M5 5L19 19"}]]
};

export const MoveDownRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 13V19H13" />
      <path d="M5 5L19 19" />
    </svg>
  );
};

export default MoveDownRight;

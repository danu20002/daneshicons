import React from 'react';

export const iconData = {
  id: "MoveDownLeft",
  name: "MoveDownLeft",
  category: "M",
  nodes: [["path",{"d":"M11 19H5V13"}],["path",{"d":"M19 5L5 19"}]]
};

export const MoveDownLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 19H5V13" />
      <path d="M19 5L5 19" />
    </svg>
  );
};

export default MoveDownLeft;

import React from 'react';

export const iconData = {
  id: "CornerRightUp",
  name: "CornerRightUp",
  category: "C",
  nodes: [["path",{"d":"m10 9 5-5 5 5"}],["path",{"d":"M4 20h7a4 4 0 0 0 4-4V4"}]]
};

export const CornerRightUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m10 9 5-5 5 5" />
      <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </svg>
  );
};

export default CornerRightUp;

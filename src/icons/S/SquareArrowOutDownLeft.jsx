import React from 'react';

export const iconData = {
  id: "SquareArrowOutDownLeft",
  name: "SquareArrowOutDownLeft",
  category: "S",
  nodes: [["path",{"d":"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{"d":"m3 21 9-9"}],["path",{"d":"M9 21H3v-6"}]]
};

export const SquareArrowOutDownLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
      <path d="m3 21 9-9" />
      <path d="M9 21H3v-6" />
    </svg>
  );
};

export default SquareArrowOutDownLeft;

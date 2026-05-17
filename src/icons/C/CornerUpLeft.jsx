import React from 'react';

export const iconData = {
  id: "CornerUpLeft",
  name: "CornerUpLeft",
  category: "C",
  nodes: [["path",{"d":"M20 20v-7a4 4 0 0 0-4-4H4"}],["path",{"d":"M9 14 4 9l5-5"}]]
};

export const CornerUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      <path d="M9 14 4 9l5-5" />
    </svg>
  );
};

export default CornerUpLeft;

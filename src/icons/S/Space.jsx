import React from 'react';

export const iconData = {
  id: "Space",
  name: "Space",
  category: "S",
  nodes: [["path",{"d":"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]
};

export const Space = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  );
};

export default Space;

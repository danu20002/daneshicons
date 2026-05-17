import React from 'react';

export const iconData = {
  id: "Rainbow",
  name: "Rainbow",
  category: "R",
  nodes: [["path",{"d":"M22 17a10 10 0 0 0-20 0"}],["path",{"d":"M6 17a6 6 0 0 1 12 0"}],["path",{"d":"M10 17a2 2 0 0 1 4 0"}]]
};

export const Rainbow = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </svg>
  );
};

export default Rainbow;

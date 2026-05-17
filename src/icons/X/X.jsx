import React from 'react';

export const iconData = {
  id: "X",
  name: "X",
  category: "X",
  nodes: [["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]]
};

export const X = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default X;

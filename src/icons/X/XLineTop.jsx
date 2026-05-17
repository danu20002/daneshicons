import React from 'react';

export const iconData = {
  id: "XLineTop",
  name: "XLineTop",
  category: "X",
  nodes: [["path",{"d":"M18 4H6"}],["path",{"d":"M18 8 6 20"}],["path",{"d":"m6 8 12 12"}]]
};

export const XLineTop = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 4H6" />
      <path d="M18 8 6 20" />
      <path d="m6 8 12 12" />
    </svg>
  );
};

export default XLineTop;

import React from 'react';

export const iconData = {
  id: "ArrowDownUp",
  name: "ArrowDownUp",
  category: "A",
  nodes: [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 20V4"}],["path",{"d":"m21 8-4-4-4 4"}],["path",{"d":"M17 4v16"}]]
};

export const ArrowDownUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
};

export default ArrowDownUp;

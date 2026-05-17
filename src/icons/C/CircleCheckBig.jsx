import React from 'react';

export const iconData = {
  id: "CircleCheckBig",
  name: "CircleCheckBig",
  category: "C",
  nodes: [["path",{"d":"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{"d":"m9 11 3 3L22 4"}]]
};

export const CircleCheckBig = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
};

export default CircleCheckBig;

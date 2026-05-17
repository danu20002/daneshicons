import React from 'react';

export const iconData = {
  id: "CircleOff",
  name: "CircleOff",
  category: "C",
  nodes: [["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{"d":"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]
};

export const CircleOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m2 2 20 20" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
      <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
    </svg>
  );
};

export default CircleOff;

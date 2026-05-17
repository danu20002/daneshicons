import React from 'react';

export const iconData = {
  id: "CircleArrowLeft",
  name: "CircleArrowLeft",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m12 8-4 4 4 4"}],["path",{"d":"M16 12H8"}]]
};

export const CircleArrowLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </svg>
  );
};

export default CircleArrowLeft;

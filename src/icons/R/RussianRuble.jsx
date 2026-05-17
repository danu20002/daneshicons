import React from 'react';

export const iconData = {
  id: "RussianRuble",
  name: "RussianRuble",
  category: "R",
  nodes: [["path",{"d":"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{"d":"M6 15h8"}]]
};

export const RussianRuble = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
      <path d="M6 15h8" />
    </svg>
  );
};

export default RussianRuble;

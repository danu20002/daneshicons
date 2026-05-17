import React from 'react';

export const iconData = {
  id: "FishSymbol",
  name: "FishSymbol",
  category: "F",
  nodes: [["path",{"d":"M2 16s9-15 20-4C11 23 2 8 2 8"}]]
};

export const FishSymbol = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </svg>
  );
};

export default FishSymbol;

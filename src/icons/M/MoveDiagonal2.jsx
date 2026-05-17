import React from 'react';

export const iconData = {
  id: "MoveDiagonal2",
  name: "MoveDiagonal2",
  category: "M",
  nodes: [["path",{"d":"M19 13v6h-6"}],["path",{"d":"M5 11V5h6"}],["path",{"d":"m5 5 14 14"}]]
};

export const MoveDiagonal2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 13v6h-6" />
      <path d="M5 11V5h6" />
      <path d="m5 5 14 14" />
    </svg>
  );
};

export default MoveDiagonal2;

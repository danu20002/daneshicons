import React from 'react';

export const iconData = {
  id: "ZodiacPisces",
  name: "ZodiacPisces",
  category: "Z",
  nodes: [["path",{"d":"M19 21a15 15 0 0 1 0-18"}],["path",{"d":"M20 12H4"}],["path",{"d":"M5 3a15 15 0 0 1 0 18"}]]
};

export const ZodiacPisces = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 21a15 15 0 0 1 0-18" />
      <path d="M20 12H4" />
      <path d="M5 3a15 15 0 0 1 0 18" />
    </svg>
  );
};

export default ZodiacPisces;

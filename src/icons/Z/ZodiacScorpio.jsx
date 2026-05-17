import React from 'react';

export const iconData = {
  id: "ZodiacScorpio",
  name: "ZodiacScorpio",
  category: "Z",
  nodes: [["path",{"d":"M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3"}],["path",{"d":"m22 19-3 3"}],["path",{"d":"M5 19V5.5a1 1 0 0 1 5 0"}],["path",{"d":"M5 5.5A2.5 2.5 0 0 0 2.5 3"}]]
};

export const ZodiacScorpio = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" />
      <path d="m22 19-3 3" />
      <path d="M5 19V5.5a1 1 0 0 1 5 0" />
      <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />
    </svg>
  );
};

export default ZodiacScorpio;

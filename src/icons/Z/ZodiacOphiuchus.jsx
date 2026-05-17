import React from 'react';

export const iconData = {
  id: "ZodiacOphiuchus",
  name: "ZodiacOphiuchus",
  category: "Z",
  nodes: [["path",{"d":"M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10"}],["path",{"d":"M6 3v12a6 6 0 0 0 12 0V3"}]]
};

export const ZodiacOphiuchus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" />
      <path d="M6 3v12a6 6 0 0 0 12 0V3" />
    </svg>
  );
};

export default ZodiacOphiuchus;

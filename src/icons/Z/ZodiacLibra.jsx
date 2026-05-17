import React from 'react';

export const iconData = {
  id: "ZodiacLibra",
  name: "ZodiacLibra",
  category: "Z",
  nodes: [["path",{"d":"M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21"}],["path",{"d":"M3 20h18"}]]
};

export const ZodiacLibra = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" />
      <path d="M3 20h18" />
    </svg>
  );
};

export default ZodiacLibra;

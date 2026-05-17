import React from 'react';

export const iconData = {
  id: "ChartColumnDecreasing",
  name: "ChartColumnDecreasing",
  category: "C",
  nodes: [["path",{"d":"M13 17V9"}],["path",{"d":"M18 17v-3"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M8 17V5"}]]
};

export const ChartColumnDecreasing = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 17V9" />
      <path d="M18 17v-3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17V5" />
    </svg>
  );
};

export default ChartColumnDecreasing;

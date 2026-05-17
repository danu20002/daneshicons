import React from 'react';

export const iconData = {
  id: "ChartBar",
  name: "ChartBar",
  category: "C",
  nodes: [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M7 16h8"}],["path",{"d":"M7 11h12"}],["path",{"d":"M7 6h3"}]]
};

export const ChartBar = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16h8" />
      <path d="M7 11h12" />
      <path d="M7 6h3" />
    </svg>
  );
};

export default ChartBar;

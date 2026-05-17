import React from 'react';

export const iconData = {
  id: "ChartGantt",
  name: "ChartGantt",
  category: "C",
  nodes: [["path",{"d":"M10 6h8"}],["path",{"d":"M12 16h6"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M8 11h7"}]]
};

export const ChartGantt = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 6h8" />
      <path d="M12 16h6" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 11h7" />
    </svg>
  );
};

export default ChartGantt;

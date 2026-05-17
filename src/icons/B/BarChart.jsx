import React from 'react';

export const iconData = {
  id: "BarChart",
  name: "BarChart",
  category: "B",
  nodes: [["path",{"d":"M5 21v-6"}],["path",{"d":"M12 21V9"}],["path",{"d":"M19 21V3"}]]
};

export const BarChart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 21v-6" />
      <path d="M12 21V9" />
      <path d="M19 21V3" />
    </svg>
  );
};

export default BarChart;

import React from 'react';

export const iconData = {
  id: "ChartNoAxesColumnDecreasing",
  name: "ChartNoAxesColumnDecreasing",
  category: "C",
  nodes: [["path",{"d":"M5 21V3"}],["path",{"d":"M12 21V9"}],["path",{"d":"M19 21v-6"}]]
};

export const ChartNoAxesColumnDecreasing = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 21V3" />
      <path d="M12 21V9" />
      <path d="M19 21v-6" />
    </svg>
  );
};

export default ChartNoAxesColumnDecreasing;

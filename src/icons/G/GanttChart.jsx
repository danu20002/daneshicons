import React from 'react';

export const iconData = {
  id: "GanttChart",
  name: "GanttChart",
  category: "G",
  nodes: [["path",{"d":"M6 5h12"}],["path",{"d":"M4 12h10"}],["path",{"d":"M12 19h8"}]]
};

export const GanttChart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6 5h12" />
      <path d="M4 12h10" />
      <path d="M12 19h8" />
    </svg>
  );
};

export default GanttChart;

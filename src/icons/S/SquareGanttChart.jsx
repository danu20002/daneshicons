import React from 'react';

export const iconData = {
  id: "SquareGanttChart",
  name: "SquareGanttChart",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M9 8h7"}],["path",{"d":"M8 12h6"}],["path",{"d":"M11 16h5"}]]
};

export const SquareGanttChart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 8h7" />
      <path d="M8 12h6" />
      <path d="M11 16h5" />
    </svg>
  );
};

export default SquareGanttChart;

import React from 'react';

export const iconData = {
  id: "ChartColumnStacked",
  name: "ChartColumnStacked",
  category: "C",
  nodes: [["path",{"d":"M11 13H7"}],["path",{"d":"M19 9h-4"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"15","y":"5","width":"4","height":"12","rx":"1"}],["rect",{"x":"7","y":"8","width":"4","height":"9","rx":"1"}]]
};

export const ChartColumnStacked = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 13H7" />
      <path d="M19 9h-4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
    </svg>
  );
};

export default ChartColumnStacked;

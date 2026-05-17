import React from 'react';

export const iconData = {
  id: "ChartBarBig",
  name: "ChartBarBig",
  category: "C",
  nodes: [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"7","y":"13","width":"9","height":"4","rx":"1"}],["rect",{"x":"7","y":"5","width":"12","height":"4","rx":"1"}]]
};

export const ChartBarBig = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
    </svg>
  );
};

export default ChartBarBig;

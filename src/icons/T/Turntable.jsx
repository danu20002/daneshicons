import React from 'react';

export const iconData = {
  id: "Turntable",
  name: "Turntable",
  category: "T",
  nodes: [["path",{"d":"M10 12.01h.01"}],["path",{"d":"M18 8v4a8 8 0 0 1-1.07 4"}],["circle",{"cx":"10","cy":"12","r":"4"}],["rect",{"x":"2","y":"4","width":"20","height":"16","rx":"2"}]]
};

export const Turntable = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 12.01h.01" />
      <path d="M18 8v4a8 8 0 0 1-1.07 4" />
      <circle cx="10" cy="12" r="4" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
};

export default Turntable;

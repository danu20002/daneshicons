import React from 'react';

export const iconData = {
  id: "Battery",
  name: "Battery",
  category: "B",
  nodes: [["path",{"d":"M 22 14 L 22 10"}],["rect",{"x":"2","y":"6","width":"16","height":"12","rx":"2"}]]
};

export const Battery = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M 22 14 L 22 10" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  );
};

export default Battery;

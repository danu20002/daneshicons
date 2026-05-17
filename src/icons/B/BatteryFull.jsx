import React from 'react';

export const iconData = {
  id: "BatteryFull",
  name: "BatteryFull",
  category: "B",
  nodes: [["path",{"d":"M10 10v4"}],["path",{"d":"M14 10v4"}],["path",{"d":"M22 14v-4"}],["path",{"d":"M6 10v4"}],["rect",{"x":"2","y":"6","width":"16","height":"12","rx":"2"}]]
};

export const BatteryFull = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 10v4" />
      <path d="M14 10v4" />
      <path d="M22 14v-4" />
      <path d="M6 10v4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  );
};

export default BatteryFull;

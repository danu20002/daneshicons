import React from 'react';

export const iconData = {
  id: "Tornado",
  name: "Tornado",
  category: "T",
  nodes: [["path",{"d":"M21 4H3"}],["path",{"d":"M18 8H6"}],["path",{"d":"M19 12H9"}],["path",{"d":"M16 16h-6"}],["path",{"d":"M11 20H9"}]]
};

export const Tornado = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 4H3" />
      <path d="M18 8H6" />
      <path d="M19 12H9" />
      <path d="M16 16h-6" />
      <path d="M11 20H9" />
    </svg>
  );
};

export default Tornado;

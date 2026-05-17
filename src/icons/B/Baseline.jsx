import React from 'react';

export const iconData = {
  id: "Baseline",
  name: "Baseline",
  category: "B",
  nodes: [["path",{"d":"M4 20h16"}],["path",{"d":"m6 16 6-12 6 12"}],["path",{"d":"M8 12h8"}]]
};

export const Baseline = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </svg>
  );
};

export default Baseline;

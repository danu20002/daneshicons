import React from 'react';

export const iconData = {
  id: "RulerDimensionLine",
  name: "RulerDimensionLine",
  category: "R",
  nodes: [["path",{"d":"M10 15v-3"}],["path",{"d":"M14 15v-3"}],["path",{"d":"M18 15v-3"}],["path",{"d":"M2 8V4"}],["path",{"d":"M22 6H2"}],["path",{"d":"M22 8V4"}],["path",{"d":"M6 15v-3"}],["rect",{"x":"2","y":"12","width":"20","height":"8","rx":"2"}]]
};

export const RulerDimensionLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 15v-3" />
      <path d="M14 15v-3" />
      <path d="M18 15v-3" />
      <path d="M2 8V4" />
      <path d="M22 6H2" />
      <path d="M22 8V4" />
      <path d="M6 15v-3" />
      <rect x="2" y="12" width="20" height="8" rx="2" />
    </svg>
  );
};

export default RulerDimensionLine;

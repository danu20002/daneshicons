import React from 'react';

export const iconData = {
  id: "DatabaseZap",
  name: "DatabaseZap",
  category: "D",
  nodes: [["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}],["path",{"d":"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{"d":"M21 5V8"}],["path",{"d":"M21 12L18 17H22L19 22"}],["path",{"d":"M3 12A9 3 0 0 0 14.59 14.87"}]]
};

export const DatabaseZap = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 15 21.84" />
      <path d="M21 5V8" />
      <path d="M21 12L18 17H22L19 22" />
      <path d="M3 12A9 3 0 0 0 14.59 14.87" />
    </svg>
  );
};

export default DatabaseZap;

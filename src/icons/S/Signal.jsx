import React from 'react';

export const iconData = {
  id: "Signal",
  name: "Signal",
  category: "S",
  nodes: [["path",{"d":"M2 20h.01"}],["path",{"d":"M7 20v-4"}],["path",{"d":"M12 20v-8"}],["path",{"d":"M17 20V8"}],["path",{"d":"M22 4v16"}]]
};

export const Signal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
};

export default Signal;

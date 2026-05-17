import React from 'react';

export const iconData = {
  id: "Ligature",
  name: "Ligature",
  category: "L",
  nodes: [["path",{"d":"M14 12h2v8"}],["path",{"d":"M14 20h4"}],["path",{"d":"M6 12h4"}],["path",{"d":"M6 20h4"}],["path",{"d":"M8 20V8a4 4 0 0 1 7.464-2"}]]
};

export const Ligature = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 12h2v8" />
      <path d="M14 20h4" />
      <path d="M6 12h4" />
      <path d="M6 20h4" />
      <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </svg>
  );
};

export default Ligature;

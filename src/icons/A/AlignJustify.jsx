import React from 'react';

export const iconData = {
  id: "AlignJustify",
  name: "AlignJustify",
  category: "A",
  nodes: [["path",{"d":"M3 5h18"}],["path",{"d":"M3 12h18"}],["path",{"d":"M3 19h18"}]]
};

export const AlignJustify = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M3 19h18" />
    </svg>
  );
};

export default AlignJustify;

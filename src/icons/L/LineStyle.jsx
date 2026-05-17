import React from 'react';

export const iconData = {
  id: "LineStyle",
  name: "LineStyle",
  category: "L",
  nodes: [["path",{"d":"M11 5h2"}],["path",{"d":"M15 12h6"}],["path",{"d":"M19 5h2"}],["path",{"d":"M3 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"M3 5h2"}]]
};

export const LineStyle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 5h2" />
      <path d="M15 12h6" />
      <path d="M19 5h2" />
      <path d="M3 12h6" />
      <path d="M3 19h18" />
      <path d="M3 5h2" />
    </svg>
  );
};

export default LineStyle;

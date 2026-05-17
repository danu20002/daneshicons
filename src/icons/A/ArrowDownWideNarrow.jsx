import React from 'react';

export const iconData = {
  id: "ArrowDownWideNarrow",
  name: "ArrowDownWideNarrow",
  category: "A",
  nodes: [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 20V4"}],["path",{"d":"M11 4h10"}],["path",{"d":"M11 8h7"}],["path",{"d":"M11 12h4"}]]
};

export const ArrowDownWideNarrow = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h10" />
      <path d="M11 8h7" />
      <path d="M11 12h4" />
    </svg>
  );
};

export default ArrowDownWideNarrow;

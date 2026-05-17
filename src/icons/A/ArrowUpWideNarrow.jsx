import React from 'react';

export const iconData = {
  id: "ArrowUpWideNarrow",
  name: "ArrowUpWideNarrow",
  category: "A",
  nodes: [["path",{"d":"m3 8 4-4 4 4"}],["path",{"d":"M7 4v16"}],["path",{"d":"M11 12h10"}],["path",{"d":"M11 16h7"}],["path",{"d":"M11 20h4"}]]
};

export const ArrowUpWideNarrow = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h10" />
      <path d="M11 16h7" />
      <path d="M11 20h4" />
    </svg>
  );
};

export default ArrowUpWideNarrow;

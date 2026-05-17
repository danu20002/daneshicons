import React from 'react';

export const iconData = {
  id: "ArrowUpToLine",
  name: "ArrowUpToLine",
  category: "A",
  nodes: [["path",{"d":"M5 3h14"}],["path",{"d":"m18 13-6-6-6 6"}],["path",{"d":"M12 7v14"}]]
};

export const ArrowUpToLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 3h14" />
      <path d="m18 13-6-6-6 6" />
      <path d="M12 7v14" />
    </svg>
  );
};

export default ArrowUpToLine;

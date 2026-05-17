import React from 'react';

export const iconData = {
  id: "ArrowDownToLine",
  name: "ArrowDownToLine",
  category: "A",
  nodes: [["path",{"d":"M12 17V3"}],["path",{"d":"m6 11 6 6 6-6"}],["path",{"d":"M19 21H5"}]]
};

export const ArrowDownToLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 17V3" />
      <path d="m6 11 6 6 6-6" />
      <path d="M19 21H5" />
    </svg>
  );
};

export default ArrowDownToLine;

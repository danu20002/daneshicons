import React from 'react';

export const iconData = {
  id: "ArrowUpFromLine",
  name: "ArrowUpFromLine",
  category: "A",
  nodes: [["path",{"d":"m18 9-6-6-6 6"}],["path",{"d":"M12 3v14"}],["path",{"d":"M5 21h14"}]]
};

export const ArrowUpFromLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m18 9-6-6-6 6" />
      <path d="M12 3v14" />
      <path d="M5 21h14" />
    </svg>
  );
};

export default ArrowUpFromLine;

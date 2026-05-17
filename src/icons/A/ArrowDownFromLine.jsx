import React from 'react';

export const iconData = {
  id: "ArrowDownFromLine",
  name: "ArrowDownFromLine",
  category: "A",
  nodes: [["path",{"d":"M19 3H5"}],["path",{"d":"M12 21V7"}],["path",{"d":"m6 15 6 6 6-6"}]]
};

export const ArrowDownFromLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 3H5" />
      <path d="M12 21V7" />
      <path d="m6 15 6 6 6-6" />
    </svg>
  );
};

export default ArrowDownFromLine;

import React from 'react';

export const iconData = {
  id: "Brackets",
  name: "Brackets",
  category: "B",
  nodes: [["path",{"d":"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}],["path",{"d":"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"}]]
};

export const Brackets = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
      <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
    </svg>
  );
};

export default Brackets;

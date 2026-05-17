import React from 'react';

export const iconData = {
  id: "Strikethrough",
  name: "Strikethrough",
  category: "S",
  nodes: [["path",{"d":"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{"d":"M14 12a4 4 0 0 1 0 8H6"}],["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}]]
};

export const Strikethrough = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  );
};

export default Strikethrough;

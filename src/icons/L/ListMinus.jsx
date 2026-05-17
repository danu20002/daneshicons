import React from 'react';

export const iconData = {
  id: "ListMinus",
  name: "ListMinus",
  category: "L",
  nodes: [["path",{"d":"M16 5H3"}],["path",{"d":"M11 12H3"}],["path",{"d":"M16 19H3"}],["path",{"d":"M21 12h-6"}]]
};

export const ListMinus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="M21 12h-6" />
    </svg>
  );
};

export default ListMinus;

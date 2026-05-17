import React from 'react';

export const iconData = {
  id: "ListEnd",
  name: "ListEnd",
  category: "L",
  nodes: [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M9 19H3"}],["path",{"d":"m16 16-3 3 3 3"}],["path",{"d":"M21 5v12a2 2 0 0 1-2 2h-6"}]]
};

export const ListEnd = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M16 12H3" />
      <path d="M9 19H3" />
      <path d="m16 16-3 3 3 3" />
      <path d="M21 5v12a2 2 0 0 1-2 2h-6" />
    </svg>
  );
};

export default ListEnd;

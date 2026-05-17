import React from 'react';

export const iconData = {
  id: "ListStart",
  name: "ListStart",
  category: "L",
  nodes: [["path",{"d":"M3 5h6"}],["path",{"d":"M3 12h13"}],["path",{"d":"M3 19h13"}],["path",{"d":"m16 8-3-3 3-3"}],["path",{"d":"M21 19V7a2 2 0 0 0-2-2h-6"}]]
};

export const ListStart = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5h6" />
      <path d="M3 12h13" />
      <path d="M3 19h13" />
      <path d="m16 8-3-3 3-3" />
      <path d="M21 19V7a2 2 0 0 0-2-2h-6" />
    </svg>
  );
};

export default ListStart;

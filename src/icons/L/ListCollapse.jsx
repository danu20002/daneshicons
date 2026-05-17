import React from 'react';

export const iconData = {
  id: "ListCollapse",
  name: "ListCollapse",
  category: "L",
  nodes: [["path",{"d":"M10 5h11"}],["path",{"d":"M10 12h11"}],["path",{"d":"M10 19h11"}],["path",{"d":"m3 10 3-3-3-3"}],["path",{"d":"m3 20 3-3-3-3"}]]
};

export const ListCollapse = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 5h11" />
      <path d="M10 12h11" />
      <path d="M10 19h11" />
      <path d="m3 10 3-3-3-3" />
      <path d="m3 20 3-3-3-3" />
    </svg>
  );
};

export default ListCollapse;

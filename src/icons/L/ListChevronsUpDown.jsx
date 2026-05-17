import React from 'react';

export const iconData = {
  id: "ListChevronsUpDown",
  name: "ListChevronsUpDown",
  category: "L",
  nodes: [["path",{"d":"M3 5h8"}],["path",{"d":"M3 12h8"}],["path",{"d":"M3 19h8"}],["path",{"d":"m15 8 3-3 3 3"}],["path",{"d":"m15 16 3 3 3-3"}]]
};

export const ListChevronsUpDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5h8" />
      <path d="M3 12h8" />
      <path d="M3 19h8" />
      <path d="m15 8 3-3 3 3" />
      <path d="m15 16 3 3 3-3" />
    </svg>
  );
};

export default ListChevronsUpDown;

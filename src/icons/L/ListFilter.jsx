import React from 'react';

export const iconData = {
  id: "ListFilter",
  name: "ListFilter",
  category: "L",
  nodes: [["path",{"d":"M2 5h20"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 19h6"}]]
};

export const ListFilter = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 5h20" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
    </svg>
  );
};

export default ListFilter;

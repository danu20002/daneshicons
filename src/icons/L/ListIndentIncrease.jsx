import React from 'react';

export const iconData = {
  id: "ListIndentIncrease",
  name: "ListIndentIncrease",
  category: "L",
  nodes: [["path",{"d":"M21 5H11"}],["path",{"d":"M21 12H11"}],["path",{"d":"M21 19H11"}],["path",{"d":"m3 8 4 4-4 4"}]]
};

export const ListIndentIncrease = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m3 8 4 4-4 4" />
    </svg>
  );
};

export default ListIndentIncrease;

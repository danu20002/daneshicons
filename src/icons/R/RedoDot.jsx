import React from 'react';

export const iconData = {
  id: "RedoDot",
  name: "RedoDot",
  category: "R",
  nodes: [["circle",{"cx":"12","cy":"17","r":"1"}],["path",{"d":"M21 7v6h-6"}],["path",{"d":"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]
};

export const RedoDot = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  );
};

export default RedoDot;

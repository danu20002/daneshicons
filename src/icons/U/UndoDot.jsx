import React from 'react';

export const iconData = {
  id: "UndoDot",
  name: "UndoDot",
  category: "U",
  nodes: [["path",{"d":"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{"d":"M3 7v6h6"}],["circle",{"cx":"12","cy":"17","r":"1"}]]
};

export const UndoDot = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
      <path d="M3 7v6h6" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );
};

export default UndoDot;

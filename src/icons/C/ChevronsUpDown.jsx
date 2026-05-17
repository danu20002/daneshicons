import React from 'react';

export const iconData = {
  id: "ChevronsUpDown",
  name: "ChevronsUpDown",
  category: "C",
  nodes: [["path",{"d":"m7 15 5 5 5-5"}],["path",{"d":"m7 9 5-5 5 5"}]]
};

export const ChevronsUpDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  );
};

export default ChevronsUpDown;

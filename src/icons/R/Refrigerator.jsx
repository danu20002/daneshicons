import React from 'react';

export const iconData = {
  id: "Refrigerator",
  name: "Refrigerator",
  category: "R",
  nodes: [["path",{"d":"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{"d":"M5 10h14"}],["path",{"d":"M15 7v6"}]]
};

export const Refrigerator = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v6" />
    </svg>
  );
};

export default Refrigerator;

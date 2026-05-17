import React from 'react';

export const iconData = {
  id: "IterationCcw",
  name: "IterationCcw",
  category: "I",
  nodes: [["path",{"d":"m16 14 4 4-4 4"}],["path",{"d":"M20 10a8 8 0 1 0-8 8h8"}]]
};

export const IterationCcw = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m16 14 4 4-4 4" />
      <path d="M20 10a8 8 0 1 0-8 8h8" />
    </svg>
  );
};

export default IterationCcw;

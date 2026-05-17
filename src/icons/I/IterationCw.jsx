import React from 'react';

export const iconData = {
  id: "IterationCw",
  name: "IterationCw",
  category: "I",
  nodes: [["path",{"d":"M4 10a8 8 0 1 1 8 8H4"}],["path",{"d":"m8 22-4-4 4-4"}]]
};

export const IterationCw = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 10a8 8 0 1 1 8 8H4" />
      <path d="m8 22-4-4 4-4" />
    </svg>
  );
};

export default IterationCw;

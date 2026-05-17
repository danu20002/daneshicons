import React from 'react';

export const iconData = {
  id: "Tally5",
  name: "Tally5",
  category: "T",
  nodes: [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}],["path",{"d":"M14 4v16"}],["path",{"d":"M19 4v16"}],["path",{"d":"M22 6 2 18"}]]
};

export const Tally5 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
      <path d="M19 4v16" />
      <path d="M22 6 2 18" />
    </svg>
  );
};

export default Tally5;

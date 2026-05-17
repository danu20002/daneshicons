import React from 'react';

export const iconData = {
  id: "Tally1",
  name: "Tally1",
  category: "T",
  nodes: [["path",{"d":"M4 4v16"}]]
};

export const Tally1 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
    </svg>
  );
};

export default Tally1;

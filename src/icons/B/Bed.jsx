import React from 'react';

export const iconData = {
  id: "Bed",
  name: "Bed",
  category: "B",
  nodes: [["path",{"d":"M2 4v16"}],["path",{"d":"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{"d":"M2 17h20"}],["path",{"d":"M6 8v9"}]]
};

export const Bed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
};

export default Bed;

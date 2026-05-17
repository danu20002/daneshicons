import React from 'react';

export const iconData = {
  id: "Pilcrow",
  name: "Pilcrow",
  category: "P",
  nodes: [["path",{"d":"M13 4v16"}],["path",{"d":"M17 4v16"}],["path",{"d":"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]
};

export const Pilcrow = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M13 4v16" />
      <path d="M17 4v16" />
      <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </svg>
  );
};

export default Pilcrow;

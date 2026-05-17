import React from 'react';

export const iconData = {
  id: "Annoyed",
  name: "Annoyed",
  category: "A",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M8 15h8"}],["path",{"d":"M8 9h2"}],["path",{"d":"M14 9h2"}]]
};

export const Annoyed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15h8" />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
    </svg>
  );
};

export default Annoyed;

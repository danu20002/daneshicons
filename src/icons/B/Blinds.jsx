import React from 'react';

export const iconData = {
  id: "Blinds",
  name: "Blinds",
  category: "B",
  nodes: [["path",{"d":"M3 3h18"}],["path",{"d":"M20 7H8"}],["path",{"d":"M20 11H8"}],["path",{"d":"M10 19h10"}],["path",{"d":"M8 15h12"}],["path",{"d":"M4 3v14"}],["circle",{"cx":"4","cy":"19","r":"2"}]]
};

export const Blinds = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 3h18" />
      <path d="M20 7H8" />
      <path d="M20 11H8" />
      <path d="M10 19h10" />
      <path d="M8 15h12" />
      <path d="M4 3v14" />
      <circle cx="4" cy="19" r="2" />
    </svg>
  );
};

export default Blinds;

import React from 'react';

export const iconData = {
  id: "Diameter",
  name: "Diameter",
  category: "D",
  nodes: [["circle",{"cx":"19","cy":"19","r":"2"}],["circle",{"cx":"5","cy":"5","r":"2"}],["path",{"d":"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{"d":"m6.41 6.41 11.18 11.18"}],["path",{"d":"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]
};

export const Diameter = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
      <path d="m6.41 6.41 11.18 11.18" />
      <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
    </svg>
  );
};

export default Diameter;

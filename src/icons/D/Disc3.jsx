import React from 'react';

export const iconData = {
  id: "Disc3",
  name: "Disc3",
  category: "D",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]
};

export const Disc3 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </svg>
  );
};

export default Disc3;

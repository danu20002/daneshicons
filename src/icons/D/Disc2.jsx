import React from 'react';

export const iconData = {
  id: "Disc2",
  name: "Disc2",
  category: "D",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 12h.01"}]]
};

export const Disc2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </svg>
  );
};

export default Disc2;

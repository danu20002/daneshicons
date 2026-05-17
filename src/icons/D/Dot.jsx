import React from 'react';

export const iconData = {
  id: "Dot",
  name: "Dot",
  category: "D",
  nodes: [["circle",{"cx":"12.1","cy":"12.1","r":"1"}]]
};

export const Dot = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
};

export default Dot;

import React from 'react';

export const iconData = {
  id: "DivideCircle",
  name: "DivideCircle",
  category: "D",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"8","x2":"16","y1":"12","y2":"12"}],["line",{"x1":"12","x2":"12","y1":"16","y2":"16"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"8"}]]
};

export const DivideCircle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
    </svg>
  );
};

export default DivideCircle;

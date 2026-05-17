import React from 'react';

export const iconData = {
  id: "Ellipse",
  name: "Ellipse",
  category: "E",
  nodes: [["ellipse",{"cx":"12","cy":"12","rx":"10","ry":"6"}]]
};

export const Ellipse = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <ellipse cx="12" cy="12" rx="10" ry="6" />
    </svg>
  );
};

export default Ellipse;

import React from 'react';

export const iconData = {
  id: "RectangleHorizontal",
  name: "RectangleHorizontal",
  category: "R",
  nodes: [["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}]]
};

export const RectangleHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
};

export default RectangleHorizontal;

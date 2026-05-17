import React from 'react';

export const iconData = {
  id: "RectangleVertical",
  name: "RectangleVertical",
  category: "R",
  nodes: [["rect",{"width":"12","height":"20","x":"6","y":"2","rx":"2"}]]
};

export const RectangleVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </svg>
  );
};

export default RectangleVertical;

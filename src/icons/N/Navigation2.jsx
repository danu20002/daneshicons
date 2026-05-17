import React from 'react';

export const iconData = {
  id: "Navigation2",
  name: "Navigation2",
  category: "N",
  nodes: [["polygon",{"points":"12 2 19 21 12 17 5 21 12 2"}]]
};

export const Navigation2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  );
};

export default Navigation2;

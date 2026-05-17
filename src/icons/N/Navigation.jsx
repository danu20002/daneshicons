import React from 'react';

export const iconData = {
  id: "Navigation",
  name: "Navigation",
  category: "N",
  nodes: [["polygon",{"points":"3 11 22 2 13 21 11 13 3 11"}]]
};

export const Navigation = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
};

export default Navigation;

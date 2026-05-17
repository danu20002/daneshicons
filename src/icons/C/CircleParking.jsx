import React from 'react';

export const iconData = {
  id: "CircleParking",
  name: "CircleParking",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M9 17V7h4a3 3 0 0 1 0 6H9"}]]
};

export const CircleParking = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
};

export default CircleParking;

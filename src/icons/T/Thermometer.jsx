import React from 'react';

export const iconData = {
  id: "Thermometer",
  name: "Thermometer",
  category: "T",
  nodes: [["path",{"d":"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]
};

export const Thermometer = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
};

export default Thermometer;

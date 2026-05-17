import React from 'react';

export const iconData = {
  id: "Cloudy",
  name: "Cloudy",
  category: "C",
  nodes: [["path",{"d":"M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"}],["path",{"d":"M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"}]]
};

export const Cloudy = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" />
      <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
    </svg>
  );
};

export default Cloudy;

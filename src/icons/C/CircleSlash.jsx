import React from 'react';

export const iconData = {
  id: "CircleSlash",
  name: "CircleSlash",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"9","x2":"15","y1":"15","y2":"9"}]]
};

export const CircleSlash = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <line x1="9" x2="15" y1="15" y2="9" />
    </svg>
  );
};

export default CircleSlash;

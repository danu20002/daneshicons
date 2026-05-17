import React from 'react';

export const iconData = {
  id: "CirclePower",
  name: "CirclePower",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 7v4"}],["path",{"d":"M7.998 9.003a5 5 0 1 0 8-.005"}]]
};

export const CirclePower = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
    </svg>
  );
};

export default CirclePower;

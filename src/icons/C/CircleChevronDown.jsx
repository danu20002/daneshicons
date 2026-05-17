import React from 'react';

export const iconData = {
  id: "CircleChevronDown",
  name: "CircleChevronDown",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m16 10-4 4-4-4"}]]
};

export const CircleChevronDown = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="m16 10-4 4-4-4" />
    </svg>
  );
};

export default CircleChevronDown;

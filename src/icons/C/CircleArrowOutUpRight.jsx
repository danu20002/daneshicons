import React from 'react';

export const iconData = {
  id: "CircleArrowOutUpRight",
  name: "CircleArrowOutUpRight",
  category: "C",
  nodes: [["path",{"d":"M22 12A10 10 0 1 1 12 2"}],["path",{"d":"M22 2 12 12"}],["path",{"d":"M16 2h6v6"}]]
};

export const CircleArrowOutUpRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 12A10 10 0 1 1 12 2" />
      <path d="M22 2 12 12" />
      <path d="M16 2h6v6" />
    </svg>
  );
};

export default CircleArrowOutUpRight;

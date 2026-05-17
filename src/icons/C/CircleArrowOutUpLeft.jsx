import React from 'react';

export const iconData = {
  id: "CircleArrowOutUpLeft",
  name: "CircleArrowOutUpLeft",
  category: "C",
  nodes: [["path",{"d":"M2 8V2h6"}],["path",{"d":"m2 2 10 10"}],["path",{"d":"M12 2A10 10 0 1 1 2 12"}]]
};

export const CircleArrowOutUpLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 8V2h6" />
      <path d="m2 2 10 10" />
      <path d="M12 2A10 10 0 1 1 2 12" />
    </svg>
  );
};

export default CircleArrowOutUpLeft;

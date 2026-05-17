import React from 'react';

export const iconData = {
  id: "ArrowDownRight",
  name: "ArrowDownRight",
  category: "A",
  nodes: [["path",{"d":"m7 7 10 10"}],["path",{"d":"M17 7v10H7"}]]
};

export const ArrowDownRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
};

export default ArrowDownRight;

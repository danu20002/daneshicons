import React from 'react';

export const iconData = {
  id: "ArrowRightLeft",
  name: "ArrowRightLeft",
  category: "A",
  nodes: [["path",{"d":"m16 3 4 4-4 4"}],["path",{"d":"M20 7H4"}],["path",{"d":"m8 21-4-4 4-4"}],["path",{"d":"M4 17h16"}]]
};

export const ArrowRightLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </svg>
  );
};

export default ArrowRightLeft;

import React from 'react';

export const iconData = {
  id: "SeparatorHorizontal",
  name: "SeparatorHorizontal",
  category: "S",
  nodes: [["path",{"d":"m16 16-4 4-4-4"}],["path",{"d":"M3 12h18"}],["path",{"d":"m8 8 4-4 4 4"}]]
};

export const SeparatorHorizontal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m16 16-4 4-4-4" />
      <path d="M3 12h18" />
      <path d="m8 8 4-4 4 4" />
    </svg>
  );
};

export default SeparatorHorizontal;

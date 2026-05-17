import React from 'react';

export const iconData = {
  id: "SpellCheck",
  name: "SpellCheck",
  category: "S",
  nodes: [["path",{"d":"m6 16 6-12 6 12"}],["path",{"d":"M8 12h8"}],["path",{"d":"m16 20 2 2 4-4"}]]
};

export const SpellCheck = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
      <path d="m16 20 2 2 4-4" />
    </svg>
  );
};

export default SpellCheck;

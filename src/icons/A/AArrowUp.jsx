import React from 'react';

export const iconData = {
  id: "AArrowUp",
  name: "AArrowUp",
  category: "A",
  nodes: [["path",{"d":"m14 11 4-4 4 4"}],["path",{"d":"M18 16V7"}],["path",{"d":"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{"d":"M3.304 13h6.392"}]]
};

export const AArrowUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m14 11 4-4 4 4" />
      <path d="M18 16V7" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </svg>
  );
};

export default AArrowUp;

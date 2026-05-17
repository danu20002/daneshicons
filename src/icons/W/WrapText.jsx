import React from 'react';

export const iconData = {
  id: "WrapText",
  name: "WrapText",
  category: "W",
  nodes: [["path",{"d":"m16 16-3 3 3 3"}],["path",{"d":"M3 12h14.5a1 1 0 0 1 0 7H13"}],["path",{"d":"M3 19h6"}],["path",{"d":"M3 5h18"}]]
};

export const WrapText = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m16 16-3 3 3 3" />
      <path d="M3 12h14.5a1 1 0 0 1 0 7H13" />
      <path d="M3 19h6" />
      <path d="M3 5h18" />
    </svg>
  );
};

export default WrapText;

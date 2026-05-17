import React from 'react';

export const iconData = {
  id: "Forward",
  name: "Forward",
  category: "F",
  nodes: [["path",{"d":"m15 17 5-5-5-5"}],["path",{"d":"M4 18v-2a4 4 0 0 1 4-4h12"}]]
};

export const Forward = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 17 5-5-5-5" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  );
};

export default Forward;

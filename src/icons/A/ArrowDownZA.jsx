import React from 'react';

export const iconData = {
  id: "ArrowDownZa",
  name: "ArrowDownZa",
  category: "A",
  nodes: [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 4v16"}],["path",{"d":"M15 4h5l-5 6h5"}],["path",{"d":"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{"d":"M20 18h-5"}]]
};

export const ArrowDownZa = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 4v16" />
      <path d="M15 4h5l-5 6h5" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      <path d="M20 18h-5" />
    </svg>
  );
};

export default ArrowDownZa;

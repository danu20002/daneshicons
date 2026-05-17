import React from 'react';

export const iconData = {
  id: "ArrowDown10",
  name: "ArrowDown10",
  category: "A",
  nodes: [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 20V4"}],["path",{"d":"M17 10V4h-2"}],["path",{"d":"M15 10h4"}],["rect",{"x":"15","y":"14","width":"4","height":"6","ry":"2"}]]
};

export const ArrowDown10 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M7 20V4" />
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
      <rect x="15" y="14" width="4" height="6" ry="2" />
    </svg>
  );
};

export default ArrowDown10;

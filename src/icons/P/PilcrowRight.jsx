import React from 'react';

export const iconData = {
  id: "PilcrowRight",
  name: "PilcrowRight",
  category: "P",
  nodes: [["path",{"d":"M10 3v11"}],["path",{"d":"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{"d":"M14 3v11"}],["path",{"d":"m18 14 4 4H2"}],["path",{"d":"m22 18-4 4"}]]
};

export const PilcrowRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 3v11" />
      <path d="M10 9H7a1 1 0 0 1 0-6h8" />
      <path d="M14 3v11" />
      <path d="m18 14 4 4H2" />
      <path d="m22 18-4 4" />
    </svg>
  );
};

export default PilcrowRight;

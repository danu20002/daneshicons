import React from 'react';

export const iconData = {
  id: "PilcrowLeft",
  name: "PilcrowLeft",
  category: "P",
  nodes: [["path",{"d":"M14 3v11"}],["path",{"d":"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{"d":"M18 3v11"}],["path",{"d":"M22 18H2l4-4"}],["path",{"d":"m6 22-4-4"}]]
};

export const PilcrowLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M14 3v11" />
      <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
      <path d="M18 3v11" />
      <path d="M22 18H2l4-4" />
      <path d="m6 22-4-4" />
    </svg>
  );
};

export default PilcrowLeft;

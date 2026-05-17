import React from 'react';

export const iconData = {
  id: "Outdent",
  name: "Outdent",
  category: "O",
  nodes: [["path",{"d":"M21 5H11"}],["path",{"d":"M21 12H11"}],["path",{"d":"M21 19H11"}],["path",{"d":"m7 8-4 4 4 4"}]]
};

export const Outdent = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m7 8-4 4 4 4" />
    </svg>
  );
};

export default Outdent;

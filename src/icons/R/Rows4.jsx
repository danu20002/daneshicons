import React from 'react';

export const iconData = {
  id: "Rows4",
  name: "Rows4",
  category: "R",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M21 7.5H3"}],["path",{"d":"M21 12H3"}],["path",{"d":"M21 16.5H3"}]]
};

export const Rows4 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 7.5H3" />
      <path d="M21 12H3" />
      <path d="M21 16.5H3" />
    </svg>
  );
};

export default Rows4;

import React from 'react';

export const iconData = {
  id: "SquareX",
  name: "SquareX",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"m15 9-6 6"}],["path",{"d":"m9 9 6 6"}]]
};

export const SquareX = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
};

export default SquareX;

import React from 'react';

export const iconData = {
  id: "SquarePi",
  name: "SquarePi",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M7 7h10"}],["path",{"d":"M10 7v10"}],["path",{"d":"M16 17a2 2 0 0 1-2-2V7"}]]
};

export const SquarePi = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M7 7h10" />
      <path d="M10 7v10" />
      <path d="M16 17a2 2 0 0 1-2-2V7" />
    </svg>
  );
};

export default SquarePi;

import React from 'react';

export const iconData = {
  id: "SquareRadical",
  name: "SquareRadical",
  category: "S",
  nodes: [["path",{"d":"M7 12h2l2 5 2-10h4"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const SquareRadical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 12h2l2 5 2-10h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
};

export default SquareRadical;

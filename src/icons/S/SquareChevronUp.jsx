import React from 'react';

export const iconData = {
  id: "SquareChevronUp",
  name: "SquareChevronUp",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"m8 14 4-4 4 4"}]]
};

export const SquareChevronUp = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="m8 14 4-4 4 4" />
    </svg>
  );
};

export default SquareChevronUp;

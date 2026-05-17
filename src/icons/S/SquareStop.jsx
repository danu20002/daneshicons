import React from 'react';

export const iconData = {
  id: "SquareStop",
  name: "SquareStop",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["rect",{"x":"9","y":"9","width":"6","height":"6","rx":"1"}]]
};

export const SquareStop = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
};

export default SquareStop;

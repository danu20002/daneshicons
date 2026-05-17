import React from 'react';

export const iconData = {
  id: "CheckSquare2",
  name: "CheckSquare2",
  category: "C",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"m9 12 2 2 4-4"}]]
};

export const CheckSquare2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};

export default CheckSquare2;

import React from 'react';

export const iconData = {
  id: "SquareActivity",
  name: "SquareActivity",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M17 12h-2l-2 5-2-10-2 5H7"}]]
};

export const SquareActivity = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M17 12h-2l-2 5-2-10-2 5H7" />
    </svg>
  );
};

export default SquareActivity;

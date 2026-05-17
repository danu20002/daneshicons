import React from 'react';

export const iconData = {
  id: "PowerSquare",
  name: "PowerSquare",
  category: "P",
  nodes: [["path",{"d":"M12 7v4"}],["path",{"d":"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const PowerSquare = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
};

export default PowerSquare;

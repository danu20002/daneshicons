import React from 'react';

export const iconData = {
  id: "Dice2",
  name: "Dice2",
  category: "D",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M15 9h.01"}],["path",{"d":"M9 15h.01"}]]
};

export const Dice2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M15 9h.01" />
      <path d="M9 15h.01" />
    </svg>
  );
};

export default Dice2;

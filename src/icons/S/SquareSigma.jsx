import React from 'react';

export const iconData = {
  id: "SquareSigma",
  name: "SquareSigma",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]
};

export const SquareSigma = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
    </svg>
  );
};

export default SquareSigma;

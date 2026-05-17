import React from 'react';

export const iconData = {
  id: "SquareUserRound",
  name: "SquareUserRound",
  category: "S",
  nodes: [["path",{"d":"M18 21a6 6 0 0 0-12 0"}],["circle",{"cx":"12","cy":"11","r":"4"}],["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}]]
};

export const SquareUserRound = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="11" r="4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
};

export default SquareUserRound;

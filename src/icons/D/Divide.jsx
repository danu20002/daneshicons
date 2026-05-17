import React from 'react';

export const iconData = {
  id: "Divide",
  name: "Divide",
  category: "D",
  nodes: [["circle",{"cx":"12","cy":"6","r":"1"}],["line",{"x1":"5","x2":"19","y1":"12","y2":"12"}],["circle",{"cx":"12","cy":"18","r":"1"}]]
};

export const Divide = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="6" r="1" />
      <line x1="5" x2="19" y1="12" y2="12" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
};

export default Divide;

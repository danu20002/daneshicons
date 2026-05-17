import React from 'react';

export const iconData = {
  id: "Currency",
  name: "Currency",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"8"}],["line",{"x1":"3","x2":"6","y1":"3","y2":"6"}],["line",{"x1":"21","x2":"18","y1":"3","y2":"6"}],["line",{"x1":"3","x2":"6","y1":"21","y2":"18"}],["line",{"x1":"21","x2":"18","y1":"21","y2":"18"}]]
};

export const Currency = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
};

export default Currency;

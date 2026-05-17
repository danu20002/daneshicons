import React from 'react';

export const iconData = {
  id: "Crosshair",
  name: "Crosshair",
  category: "C",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"22","x2":"18","y1":"12","y2":"12"}],["line",{"x1":"6","x2":"2","y1":"12","y2":"12"}],["line",{"x1":"12","x2":"12","y1":"6","y2":"2"}],["line",{"x1":"12","x2":"12","y1":"22","y2":"18"}]]
};

export const Crosshair = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="22" x2="18" y1="12" y2="12" />
      <line x1="6" x2="2" y1="12" y2="12" />
      <line x1="12" x2="12" y1="6" y2="2" />
      <line x1="12" x2="12" y1="22" y2="18" />
    </svg>
  );
};

export default Crosshair;

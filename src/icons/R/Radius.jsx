import React from 'react';

export const iconData = {
  id: "Radius",
  name: "Radius",
  category: "R",
  nodes: [["path",{"d":"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{"cx":"19","cy":"19","r":"2"}],["path",{"d":"m13.41 13.41 4.18 4.18"}],["circle",{"cx":"12","cy":"12","r":"2"}]]
};

export const Radius = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
      <circle cx="19" cy="19" r="2" />
      <path d="m13.41 13.41 4.18 4.18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
};

export default Radius;

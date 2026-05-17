import React from 'react';

export const iconData = {
  id: "Spline",
  name: "Spline",
  category: "S",
  nodes: [["circle",{"cx":"19","cy":"5","r":"2"}],["circle",{"cx":"5","cy":"19","r":"2"}],["path",{"d":"M5 17A12 12 0 0 1 17 5"}]]
};

export const Spline = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </svg>
  );
};

export default Spline;

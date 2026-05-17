import React from 'react';

export const iconData = {
  id: "Equal",
  name: "Equal",
  category: "E",
  nodes: [["line",{"x1":"5","x2":"19","y1":"9","y2":"9"}],["line",{"x1":"5","x2":"19","y1":"15","y2":"15"}]]
};

export const Equal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
};

export default Equal;

import React from 'react';

export const iconData = {
  id: "Ratio",
  name: "Ratio",
  category: "R",
  nodes: [["rect",{"width":"12","height":"20","x":"6","y":"2","rx":"2"}],["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}]]
};

export const Ratio = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
};

export default Ratio;

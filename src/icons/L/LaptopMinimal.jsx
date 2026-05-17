import React from 'react';

export const iconData = {
  id: "LaptopMinimal",
  name: "LaptopMinimal",
  category: "L",
  nodes: [["rect",{"width":"18","height":"12","x":"3","y":"4","rx":"2","ry":"2"}],["line",{"x1":"2","x2":"22","y1":"20","y2":"20"}]]
};

export const LaptopMinimal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
};

export default LaptopMinimal;

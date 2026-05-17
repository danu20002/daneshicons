import React from 'react';

export const iconData = {
  id: "StopCircle",
  name: "StopCircle",
  category: "S",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["rect",{"x":"9","y":"9","width":"6","height":"6","rx":"1"}]]
};

export const StopCircle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
};

export default StopCircle;

import React from 'react';

export const iconData = {
  id: "ToggleLeft",
  name: "ToggleLeft",
  category: "T",
  nodes: [["circle",{"cx":"9","cy":"12","r":"3"}],["rect",{"width":"20","height":"14","x":"2","y":"5","rx":"7"}]]
};

export const ToggleLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="9" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </svg>
  );
};

export default ToggleLeft;

import React from 'react';

export const iconData = {
  id: "Ungroup",
  name: "Ungroup",
  category: "U",
  nodes: [["rect",{"width":"8","height":"6","x":"5","y":"4","rx":"1"}],["rect",{"width":"8","height":"6","x":"11","y":"14","rx":"1"}]]
};

export const Ungroup = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="8" height="6" x="5" y="4" rx="1" />
      <rect width="8" height="6" x="11" y="14" rx="1" />
    </svg>
  );
};

export default Ungroup;

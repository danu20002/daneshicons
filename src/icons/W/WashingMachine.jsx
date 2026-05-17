import React from 'react';

export const iconData = {
  id: "WashingMachine",
  name: "WashingMachine",
  category: "W",
  nodes: [["path",{"d":"M3 6h3"}],["path",{"d":"M17 6h.01"}],["rect",{"width":"18","height":"20","x":"3","y":"2","rx":"2"}],["circle",{"cx":"12","cy":"13","r":"5"}],["path",{"d":"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]
};

export const WashingMachine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  );
};

export default WashingMachine;

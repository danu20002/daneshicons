import React from 'react';

export const iconData = {
  id: "PcCase",
  name: "PcCase",
  category: "P",
  nodes: [["rect",{"width":"14","height":"20","x":"5","y":"2","rx":"2"}],["path",{"d":"M15 14h.01"}],["path",{"d":"M9 6h6"}],["path",{"d":"M9 10h6"}]]
};

export const PcCase = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M15 14h.01" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
    </svg>
  );
};

export default PcCase;

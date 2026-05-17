import React from 'react';

export const iconData = {
  id: "Videotape",
  name: "Videotape",
  category: "V",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M2 8h20"}],["circle",{"cx":"8","cy":"14","r":"2"}],["path",{"d":"M8 12h8"}],["circle",{"cx":"16","cy":"14","r":"2"}]]
};

export const Videotape = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 8h20" />
      <circle cx="8" cy="14" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="14" r="2" />
    </svg>
  );
};

export default Videotape;

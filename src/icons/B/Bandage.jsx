import React from 'react';

export const iconData = {
  id: "Bandage",
  name: "Bandage",
  category: "B",
  nodes: [["path",{"d":"M10 10.01h.01"}],["path",{"d":"M10 14.01h.01"}],["path",{"d":"M14 10.01h.01"}],["path",{"d":"M14 14.01h.01"}],["path",{"d":"M18 6v12"}],["path",{"d":"M6 6v12"}],["rect",{"x":"2","y":"6","width":"20","height":"12","rx":"2"}]]
};

export const Bandage = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 10.01h.01" />
      <path d="M10 14.01h.01" />
      <path d="M14 10.01h.01" />
      <path d="M14 14.01h.01" />
      <path d="M18 6v12" />
      <path d="M6 6v12" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  );
};

export default Bandage;

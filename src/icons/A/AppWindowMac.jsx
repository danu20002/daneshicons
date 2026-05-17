import React from 'react';

export const iconData = {
  id: "AppWindowMac",
  name: "AppWindowMac",
  category: "A",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M6 8h.01"}],["path",{"d":"M10 8h.01"}],["path",{"d":"M14 8h.01"}]]
};

export const AppWindowMac = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  );
};

export default AppWindowMac;

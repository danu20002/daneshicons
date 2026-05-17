import React from 'react';

export const iconData = {
  id: "PanelLeftDashed",
  name: "PanelLeftDashed",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M9 14v1"}],["path",{"d":"M9 19v2"}],["path",{"d":"M9 3v2"}],["path",{"d":"M9 9v1"}]]
};

export const PanelLeftDashed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 14v1" />
      <path d="M9 19v2" />
      <path d="M9 3v2" />
      <path d="M9 9v1" />
    </svg>
  );
};

export default PanelLeftDashed;

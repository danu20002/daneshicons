import React from 'react';

export const iconData = {
  id: "PanelBottomInactive",
  name: "PanelBottomInactive",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M14 15h1"}],["path",{"d":"M19 15h2"}],["path",{"d":"M3 15h2"}],["path",{"d":"M9 15h1"}]]
};

export const PanelBottomInactive = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M14 15h1" />
      <path d="M19 15h2" />
      <path d="M3 15h2" />
      <path d="M9 15h1" />
    </svg>
  );
};

export default PanelBottomInactive;

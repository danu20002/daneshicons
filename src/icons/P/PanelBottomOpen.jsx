import React from 'react';

export const iconData = {
  id: "PanelBottomOpen",
  name: "PanelBottomOpen",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M3 15h18"}],["path",{"d":"m9 10 3-3 3 3"}]]
};

export const PanelBottomOpen = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M3 15h18" />
      <path d="m9 10 3-3 3 3" />
    </svg>
  );
};

export default PanelBottomOpen;

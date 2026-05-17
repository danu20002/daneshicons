import React from 'react';

export const iconData = {
  id: "PanelTopOpen",
  name: "PanelTopOpen",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M3 9h18"}],["path",{"d":"m15 14-3 3-3-3"}]]
};

export const PanelTopOpen = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M3 9h18" />
      <path d="m15 14-3 3-3-3" />
    </svg>
  );
};

export default PanelTopOpen;

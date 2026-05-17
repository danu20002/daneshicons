import React from 'react';

export const iconData = {
  id: "LayoutPanelTop",
  name: "LayoutPanelTop",
  category: "L",
  nodes: [["rect",{"width":"18","height":"7","x":"3","y":"3","rx":"1"}],["rect",{"width":"7","height":"7","x":"3","y":"14","rx":"1"}],["rect",{"width":"7","height":"7","x":"14","y":"14","rx":"1"}]]
};

export const LayoutPanelTop = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  );
};

export default LayoutPanelTop;

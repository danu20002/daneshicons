import React from 'react';

export const iconData = {
  id: "PanelLeftRightDashed",
  name: "PanelLeftRightDashed",
  category: "P",
  nodes: [["path",{"d":"M15 10V9"}],["path",{"d":"M15 15v-1"}],["path",{"d":"M15 21v-2"}],["path",{"d":"M15 5V3"}],["path",{"d":"M9 10V9"}],["path",{"d":"M9 15v-1"}],["path",{"d":"M9 21v-2"}],["path",{"d":"M9 5V3"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const PanelLeftRightDashed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 10V9" />
      <path d="M15 15v-1" />
      <path d="M15 21v-2" />
      <path d="M15 5V3" />
      <path d="M9 10V9" />
      <path d="M9 15v-1" />
      <path d="M9 21v-2" />
      <path d="M9 5V3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
};

export default PanelLeftRightDashed;

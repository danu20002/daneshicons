import React from 'react';

export const iconData = {
  id: "PanelRightInactive",
  name: "PanelRightInactive",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M15 14v1"}],["path",{"d":"M15 19v2"}],["path",{"d":"M15 3v2"}],["path",{"d":"M15 9v1"}]]
};

export const PanelRightInactive = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M15 14v1" />
      <path d="M15 19v2" />
      <path d="M15 3v2" />
      <path d="M15 9v1" />
    </svg>
  );
};

export default PanelRightInactive;

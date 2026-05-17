import React from 'react';

export const iconData = {
  id: "MonitorSmartphone",
  name: "MonitorSmartphone",
  category: "M",
  nodes: [["path",{"d":"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{"d":"M10 19v-3.96 3.15"}],["path",{"d":"M7 19h5"}],["rect",{"width":"6","height":"10","x":"16","y":"12","rx":"2"}]]
};

export const MonitorSmartphone = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <path d="M10 19v-3.96 3.15" />
      <path d="M7 19h5" />
      <rect width="6" height="10" x="16" y="12" rx="2" />
    </svg>
  );
};

export default MonitorSmartphone;

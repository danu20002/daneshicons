import React from 'react';

export const iconData = {
  id: "MonitorCloud",
  name: "MonitorCloud",
  category: "M",
  nodes: [["path",{"d":"M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"}],["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["rect",{"x":"2","y":"3","width":"20","height":"14","rx":"2"}]]
};

export const MonitorCloud = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  );
};

export default MonitorCloud;

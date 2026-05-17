import React from 'react';

export const iconData = {
  id: "MonitorStop",
  name: "MonitorStop",
  category: "M",
  nodes: [["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["rect",{"x":"2","y":"3","width":"20","height":"14","rx":"2"}],["rect",{"x":"9","y":"7","width":"6","height":"6","rx":"1"}]]
};

export const MonitorStop = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <rect x="9" y="7" width="6" height="6" rx="1" />
    </svg>
  );
};

export default MonitorStop;

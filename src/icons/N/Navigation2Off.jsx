import React from 'react';

export const iconData = {
  id: "Navigation2Off",
  name: "Navigation2Off",
  category: "N",
  nodes: [["path",{"d":"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{"d":"M14.53 8.88 12 2l-1.17 3.17"}],["line",{"x1":"2","x2":"22","y1":"2","y2":"22"}]]
};

export const Navigation2Off = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
      <path d="M14.53 8.88 12 2l-1.17 3.17" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};

export default Navigation2Off;

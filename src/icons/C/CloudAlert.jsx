import React from 'react';

export const iconData = {
  id: "CloudAlert",
  name: "CloudAlert",
  category: "C",
  nodes: [["path",{"d":"M12 12v4"}],["path",{"d":"M12 20h.01"}],["path",{"d":"M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"}]]
};

export const CloudAlert = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 12v4" />
      <path d="M12 20h.01" />
      <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
    </svg>
  );
};

export default CloudAlert;

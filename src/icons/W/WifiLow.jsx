import React from 'react';

export const iconData = {
  id: "WifiLow",
  name: "WifiLow",
  category: "W",
  nodes: [["path",{"d":"M12 20h.01"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0"}]]
};

export const WifiLow = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
};

export default WifiLow;

import React from 'react';

export const iconData = {
  id: "WifiZero",
  name: "WifiZero",
  category: "W",
  nodes: [["path",{"d":"M12 20h.01"}]]
};

export const WifiZero = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
    </svg>
  );
};

export default WifiZero;

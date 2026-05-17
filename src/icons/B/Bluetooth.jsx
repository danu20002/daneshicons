import React from 'react';

export const iconData = {
  id: "Bluetooth",
  name: "Bluetooth",
  category: "B",
  nodes: [["path",{"d":"m7 7 10 10-5 5V2l5 5L7 17"}]]
};

export const Bluetooth = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  );
};

export default Bluetooth;

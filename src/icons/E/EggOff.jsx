import React from 'react';

export const iconData = {
  id: "EggOff",
  name: "EggOff",
  category: "E",
  nodes: [["path",{"d":"m2 2 20 20"}],["path",{"d":"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19"}],["path",{"d":"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"}]]
};

export const EggOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m2 2 20 20" />
      <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
      <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
    </svg>
  );
};

export default EggOff;

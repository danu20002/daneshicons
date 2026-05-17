import React from 'react';

export const iconData = {
  id: "EthernetPort",
  name: "EthernetPort",
  category: "E",
  nodes: [["path",{"d":"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{"d":"M6 8v1"}],["path",{"d":"M10 8v1"}],["path",{"d":"M14 8v1"}],["path",{"d":"M18 8v1"}]]
};

export const EthernetPort = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" />
      <path d="M6 8v1" />
      <path d="M10 8v1" />
      <path d="M14 8v1" />
      <path d="M18 8v1" />
    </svg>
  );
};

export default EthernetPort;

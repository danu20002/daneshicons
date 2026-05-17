import React from 'react';

export const iconData = {
  id: "DoorClosed",
  name: "DoorClosed",
  category: "D",
  nodes: [["path",{"d":"M10 12h.01"}],["path",{"d":"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{"d":"M2 20h20"}]]
};

export const DoorClosed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 12h.01" />
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
    </svg>
  );
};

export default DoorClosed;

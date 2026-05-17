import React from 'react';

export const iconData = {
  id: "ClockPlus",
  name: "ClockPlus",
  category: "C",
  nodes: [["path",{"d":"M12 6v6l3.644 1.822"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}],["path",{"d":"M21.92 13.267a10 10 0 1 0-8.653 8.653"}]]
};

export const ClockPlus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v6l3.644 1.822" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
    </svg>
  );
};

export default ClockPlus;

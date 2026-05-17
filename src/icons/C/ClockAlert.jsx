import React from 'react';

export const iconData = {
  id: "ClockAlert",
  name: "ClockAlert",
  category: "C",
  nodes: [["path",{"d":"M12 6v6l4 2"}],["path",{"d":"M20 12v5"}],["path",{"d":"M20 21h.01"}],["path",{"d":"M21.25 8.2A10 10 0 1 0 16 21.16"}]]
};

export const ClockAlert = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v6l4 2" />
      <path d="M20 12v5" />
      <path d="M20 21h.01" />
      <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
    </svg>
  );
};

export default ClockAlert;

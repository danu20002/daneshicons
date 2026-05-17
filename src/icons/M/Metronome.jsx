import React from 'react';

export const iconData = {
  id: "Metronome",
  name: "Metronome",
  category: "M",
  nodes: [["path",{"d":"M12 11.4V9.1"}],["path",{"d":"m12 17 6.59-6.59"}],["path",{"d":"m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"}],["circle",{"cx":"20","cy":"9","r":"2"}]]
};

export const Metronome = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 11.4V9.1" />
      <path d="m12 17 6.59-6.59" />
      <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" />
      <circle cx="20" cy="9" r="2" />
    </svg>
  );
};

export default Metronome;

import React from 'react';

export const iconData = {
  id: "Waves",
  name: "Waves",
  category: "W",
  nodes: [["path",{"d":"M2 12q2.5 2 5 0t5 0 5 0 5 0"}],["path",{"d":"M2 19q2.5 2 5 0t5 0 5 0 5 0"}],["path",{"d":"M2 5q2.5 2 5 0t5 0 5 0 5 0"}]]
};

export const Waves = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />
    </svg>
  );
};

export default Waves;

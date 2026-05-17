import React from 'react';

export const iconData = {
  id: "WavesVertical",
  name: "WavesVertical",
  category: "W",
  nodes: [["path",{"d":"M12 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{"d":"M19 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{"d":"M5 2q2 2.5 0 5t0 5 0 5 0 5"}]]
};

export const WavesVertical = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />
    </svg>
  );
};

export default WavesVertical;

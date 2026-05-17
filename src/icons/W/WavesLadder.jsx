import React from 'react';

export const iconData = {
  id: "WavesLadder",
  name: "WavesLadder",
  category: "W",
  nodes: [["path",{"d":"M19 5a2 2 0 0 0-2 2v11"}],["path",{"d":"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{"d":"M7 13h10"}],["path",{"d":"M7 9h10"}],["path",{"d":"M9 5a2 2 0 0 0-2 2v11"}]]
};

export const WavesLadder = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 5a2 2 0 0 0-2 2v11" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M7 13h10" />
      <path d="M7 9h10" />
      <path d="M9 5a2 2 0 0 0-2 2v11" />
    </svg>
  );
};

export default WavesLadder;

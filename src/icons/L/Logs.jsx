import React from 'react';

export const iconData = {
  id: "Logs",
  name: "Logs",
  category: "L",
  nodes: [["path",{"d":"M3 5h1"}],["path",{"d":"M3 12h1"}],["path",{"d":"M3 19h1"}],["path",{"d":"M8 5h1"}],["path",{"d":"M8 12h1"}],["path",{"d":"M8 19h1"}],["path",{"d":"M13 5h8"}],["path",{"d":"M13 12h8"}],["path",{"d":"M13 19h8"}]]
};

export const Logs = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5h1" />
      <path d="M3 12h1" />
      <path d="M3 19h1" />
      <path d="M8 5h1" />
      <path d="M8 12h1" />
      <path d="M8 19h1" />
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
    </svg>
  );
};

export default Logs;

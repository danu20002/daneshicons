import React from 'react';

export const iconData = {
  id: "GeorgianLari",
  name: "GeorgianLari",
  category: "G",
  nodes: [["path",{"d":"M11.5 21a7.5 7.5 0 1 1 7.35-9"}],["path",{"d":"M13 12V3"}],["path",{"d":"M4 21h16"}],["path",{"d":"M9 12V3"}]]
};

export const GeorgianLari = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
      <path d="M13 12V3" />
      <path d="M4 21h16" />
      <path d="M9 12V3" />
    </svg>
  );
};

export default GeorgianLari;

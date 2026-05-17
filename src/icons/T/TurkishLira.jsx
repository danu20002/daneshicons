import React from 'react';

export const iconData = {
  id: "TurkishLira",
  name: "TurkishLira",
  category: "T",
  nodes: [["path",{"d":"M15 4 5 9"}],["path",{"d":"m15 8.5-10 5"}],["path",{"d":"M18 12a9 9 0 0 1-9 9V3"}]]
};

export const TurkishLira = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M15 4 5 9" />
      <path d="m15 8.5-10 5" />
      <path d="M18 12a9 9 0 0 1-9 9V3" />
    </svg>
  );
};

export default TurkishLira;

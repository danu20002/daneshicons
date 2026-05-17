import React from 'react';

export const iconData = {
  id: "Diff",
  name: "Diff",
  category: "D",
  nodes: [["path",{"d":"M12 3v14"}],["path",{"d":"M5 10h14"}],["path",{"d":"M5 21h14"}]]
};

export const Diff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 3v14" />
      <path d="M5 10h14" />
      <path d="M5 21h14" />
    </svg>
  );
};

export default Diff;

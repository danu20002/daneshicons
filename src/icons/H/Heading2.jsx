import React from 'react';

export const iconData = {
  id: "Heading2",
  name: "Heading2",
  category: "H",
  nodes: [["path",{"d":"M4 12h8"}],["path",{"d":"M4 18V6"}],["path",{"d":"M12 18V6"}],["path",{"d":"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]
};

export const Heading2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </svg>
  );
};

export default Heading2;

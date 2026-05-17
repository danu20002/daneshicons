import React from 'react';

export const iconData = {
  id: "Heading",
  name: "Heading",
  category: "H",
  nodes: [["path",{"d":"M6 12h12"}],["path",{"d":"M6 20V4"}],["path",{"d":"M18 20V4"}]]
};

export const Heading = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  );
};

export default Heading;

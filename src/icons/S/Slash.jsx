import React from 'react';

export const iconData = {
  id: "Slash",
  name: "Slash",
  category: "S",
  nodes: [["path",{"d":"M22 2 2 22"}]]
};

export const Slash = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 2 2 22" />
    </svg>
  );
};

export default Slash;

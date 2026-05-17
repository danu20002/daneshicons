import React from 'react';

export const iconData = {
  id: "Music3",
  name: "Music3",
  category: "M",
  nodes: [["circle",{"cx":"12","cy":"18","r":"4"}],["path",{"d":"M16 18V2"}]]
};

export const Music3 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="18" r="4" />
      <path d="M16 18V2" />
    </svg>
  );
};

export default Music3;

import React from 'react';

export const iconData = {
  id: "Ban",
  name: "Ban",
  category: "B",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M4.929 4.929 19.07 19.071"}]]
};

export const Ban = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4.929 4.929 19.07 19.071" />
    </svg>
  );
};

export default Ban;

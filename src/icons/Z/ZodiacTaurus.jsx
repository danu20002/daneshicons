import React from 'react';

export const iconData = {
  id: "ZodiacTaurus",
  name: "ZodiacTaurus",
  category: "Z",
  nodes: [["circle",{"cx":"12","cy":"15","r":"6"}],["path",{"d":"M18 3A6 6 0 0 1 6 3"}]]
};

export const ZodiacTaurus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <circle cx="12" cy="15" r="6" />
      <path d="M18 3A6 6 0 0 1 6 3" />
    </svg>
  );
};

export default ZodiacTaurus;

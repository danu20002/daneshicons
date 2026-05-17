import React from 'react';

export const iconData = {
  id: "Eclipse",
  name: "Eclipse",
  category: "E",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 2a7 7 0 1 0 10 10"}]]
};

export const Eclipse = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
};

export default Eclipse;

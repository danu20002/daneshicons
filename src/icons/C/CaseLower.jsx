import React from 'react';

export const iconData = {
  id: "CaseLower",
  name: "CaseLower",
  category: "C",
  nodes: [["path",{"d":"M10 9v7"}],["path",{"d":"M14 6v10"}],["circle",{"cx":"17.5","cy":"12.5","r":"3.5"}],["circle",{"cx":"6.5","cy":"12.5","r":"3.5"}]]
};

export const CaseLower = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 9v7" />
      <path d="M14 6v10" />
      <circle cx="17.5" cy="12.5" r="3.5" />
      <circle cx="6.5" cy="12.5" r="3.5" />
    </svg>
  );
};

export default CaseLower;

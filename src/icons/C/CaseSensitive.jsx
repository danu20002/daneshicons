import React from 'react';

export const iconData = {
  id: "CaseSensitive",
  name: "CaseSensitive",
  category: "C",
  nodes: [["path",{"d":"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{"d":"M22 9v7"}],["path",{"d":"M3.304 13h6.392"}],["circle",{"cx":"18.5","cy":"12.5","r":"3.5"}]]
};

export const CaseSensitive = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M22 9v7" />
      <path d="M3.304 13h6.392" />
      <circle cx="18.5" cy="12.5" r="3.5" />
    </svg>
  );
};

export default CaseSensitive;

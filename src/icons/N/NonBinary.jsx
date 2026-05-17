import React from 'react';

export const iconData = {
  id: "NonBinary",
  name: "NonBinary",
  category: "N",
  nodes: [["path",{"d":"M12 2v10"}],["path",{"d":"m8.5 4 7 4"}],["path",{"d":"m8.5 8 7-4"}],["circle",{"cx":"12","cy":"17","r":"5"}]]
};

export const NonBinary = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2v10" />
      <path d="m8.5 4 7 4" />
      <path d="m8.5 8 7-4" />
      <circle cx="12" cy="17" r="5" />
    </svg>
  );
};

export default NonBinary;

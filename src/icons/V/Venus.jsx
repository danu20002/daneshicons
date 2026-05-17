import React from 'react';

export const iconData = {
  id: "Venus",
  name: "Venus",
  category: "V",
  nodes: [["path",{"d":"M12 15v7"}],["path",{"d":"M9 19h6"}],["circle",{"cx":"12","cy":"9","r":"6"}]]
};

export const Venus = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 15v7" />
      <path d="M9 19h6" />
      <circle cx="12" cy="9" r="6" />
    </svg>
  );
};

export default Venus;

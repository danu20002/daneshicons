import React from 'react';

export const iconData = {
  id: "Gpu",
  name: "Gpu",
  category: "G",
  nodes: [["path",{"d":"M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2"}],["path",{"d":"M2 21V3"}],["path",{"d":"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}],["circle",{"cx":"16","cy":"11","r":"2"}],["circle",{"cx":"8","cy":"11","r":"2"}]]
};

export const Gpu = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" />
      <path d="M2 21V3" />
      <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
      <circle cx="16" cy="11" r="2" />
      <circle cx="8" cy="11" r="2" />
    </svg>
  );
};

export default Gpu;

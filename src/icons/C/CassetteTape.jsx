import React from 'react';

export const iconData = {
  id: "CassetteTape",
  name: "CassetteTape",
  category: "C",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["circle",{"cx":"8","cy":"10","r":"2"}],["path",{"d":"M8 12h8"}],["circle",{"cx":"16","cy":"10","r":"2"}],["path",{"d":"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]
};

export const CassetteTape = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <circle cx="8" cy="10" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="10" r="2" />
      <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
    </svg>
  );
};

export default CassetteTape;

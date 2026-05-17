import React from 'react';

export const iconData = {
  id: "Snail",
  name: "Snail",
  category: "S",
  nodes: [["path",{"d":"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{"cx":"10","cy":"13","r":"8"}],["path",{"d":"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{"d":"M18 3 19.1 5.2"}],["path",{"d":"M22 3 20.9 5.2"}]]
};

export const Snail = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
      <circle cx="10" cy="13" r="8" />
      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
      <path d="M18 3 19.1 5.2" />
      <path d="M22 3 20.9 5.2" />
    </svg>
  );
};

export default Snail;

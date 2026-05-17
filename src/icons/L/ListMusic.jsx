import React from 'react';

export const iconData = {
  id: "ListMusic",
  name: "ListMusic",
  category: "L",
  nodes: [["path",{"d":"M16 5H3"}],["path",{"d":"M11 12H3"}],["path",{"d":"M11 19H3"}],["path",{"d":"M21 16V5"}],["circle",{"cx":"18","cy":"16","r":"3"}]]
};

export const ListMusic = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M11 19H3" />
      <path d="M21 16V5" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
};

export default ListMusic;

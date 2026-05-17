import React from 'react';

export const iconData = {
  id: "Album",
  name: "Album",
  category: "A",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["polyline",{"points":"11 3 11 11 14 8 17 11 17 3"}]]
};

export const Album = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </svg>
  );
};

export default Album;

import React from 'react';

export const iconData = {
  id: "MirrorRectangular",
  name: "MirrorRectangular",
  category: "M",
  nodes: [["path",{"d":"M11 6 8 9"}],["path",{"d":"m16 7-8 8"}],["rect",{"x":"4","y":"2","width":"16","height":"20","rx":"2"}]]
};

export const MirrorRectangular = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 6 8 9" />
      <path d="m16 7-8 8" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
};

export default MirrorRectangular;

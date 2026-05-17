import React from 'react';

export const iconData = {
  id: "AlignCenter",
  name: "AlignCenter",
  category: "A",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M17 12H7"}],["path",{"d":"M19 19H5"}]]
};

export const AlignCenter = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H3" />
      <path d="M17 12H7" />
      <path d="M19 19H5" />
    </svg>
  );
};

export default AlignCenter;

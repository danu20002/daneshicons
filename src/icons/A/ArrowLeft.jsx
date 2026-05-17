import React from 'react';

export const iconData = {
  id: "ArrowLeft",
  name: "ArrowLeft",
  category: "A",
  nodes: [["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]]
};

export const ArrowLeft = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};

export default ArrowLeft;

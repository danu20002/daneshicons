import React from 'react';

export const iconData = {
  id: "CheckLine",
  name: "CheckLine",
  category: "C",
  nodes: [["path",{"d":"M20 4L9 15"}],["path",{"d":"M21 19L3 19"}],["path",{"d":"M9 15L4 10"}]]
};

export const CheckLine = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 4L9 15" />
      <path d="M21 19L3 19" />
      <path d="M9 15L4 10" />
    </svg>
  );
};

export default CheckLine;

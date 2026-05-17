import React from 'react';

export const iconData = {
  id: "EyeClosed",
  name: "EyeClosed",
  category: "E",
  nodes: [["path",{"d":"m15 18-.722-3.25"}],["path",{"d":"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{"d":"m20 15-1.726-2.05"}],["path",{"d":"m4 15 1.726-2.05"}],["path",{"d":"m9 18 .722-3.25"}]]
};

export const EyeClosed = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 18-.722-3.25" />
      <path d="M2 8a10.645 10.645 0 0 0 20 0" />
      <path d="m20 15-1.726-2.05" />
      <path d="m4 15 1.726-2.05" />
      <path d="m9 18 .722-3.25" />
    </svg>
  );
};

export default EyeClosed;

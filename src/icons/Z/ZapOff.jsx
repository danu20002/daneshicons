import React from 'react';

export const iconData = {
  id: "ZapOff",
  name: "ZapOff",
  category: "Z",
  nodes: [["path",{"d":"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{"d":"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{"d":"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{"d":"m2 2 20 20"}]]
};

export const ZapOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
      <path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
      <path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" />
      <path d="m2 2 20 20" />
    </svg>
  );
};

export default ZapOff;

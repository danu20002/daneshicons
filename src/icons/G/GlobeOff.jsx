import React from 'react';

export const iconData = {
  id: "GlobeOff",
  name: "GlobeOff",
  category: "G",
  nodes: [["path",{"d":"M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643"}],["path",{"d":"M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929"}],["path",{"d":"M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687"}],["path",{"d":"M17.656 12H22"}],["path",{"d":"M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45"}],["path",{"d":"M2 12h10"}],["path",{"d":"m2 2 20 20"}]]
};

export const GlobeOff = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" />
      <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" />
      <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" />
      <path d="M17.656 12H22" />
      <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" />
      <path d="M2 12h10" />
      <path d="m2 2 20 20" />
    </svg>
  );
};

export default GlobeOff;

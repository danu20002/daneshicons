import React from 'react';

export const iconData = {
  id: "TrainFrontTunnel",
  name: "TrainFrontTunnel",
  category: "T",
  nodes: [["path",{"d":"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{"d":"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{"d":"M10 15h.01"}],["path",{"d":"M14 15h.01"}],["path",{"d":"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{"d":"m9 19-2 3"}],["path",{"d":"m15 19 2 3"}]]
};

export const TrainFrontTunnel = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 22V12a10 10 0 1 1 20 0v10" />
      <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
      <path d="M10 15h.01" />
      <path d="M14 15h.01" />
      <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
      <path d="m9 19-2 3" />
      <path d="m15 19 2 3" />
    </svg>
  );
};

export default TrainFrontTunnel;

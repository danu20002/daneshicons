import React from 'react';

export const iconData = {
  id: "HandGrab",
  name: "HandGrab",
  category: "H",
  nodes: [["path",{"d":"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{"d":"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{"d":"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{"d":"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{"d":"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]
};

export const HandGrab = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
      <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
      <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </svg>
  );
};

export default HandGrab;

import React from 'react';

export const iconData = {
  id: "Castle",
  name: "Castle",
  category: "C",
  nodes: [["path",{"d":"M10 5V3"}],["path",{"d":"M14 5V3"}],["path",{"d":"M15 21v-3a3 3 0 0 0-6 0v3"}],["path",{"d":"M18 3v8"}],["path",{"d":"M18 5H6"}],["path",{"d":"M22 11H2"}],["path",{"d":"M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"}],["path",{"d":"M6 3v8"}]]
};

export const Castle = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 5V3" />
      <path d="M14 5V3" />
      <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
      <path d="M18 3v8" />
      <path d="M18 5H6" />
      <path d="M22 11H2" />
      <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
      <path d="M6 3v8" />
    </svg>
  );
};

export default Castle;

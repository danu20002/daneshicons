import React from 'react';

export const iconData = {
  id: "Shrink",
  name: "Shrink",
  category: "S",
  nodes: [["path",{"d":"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{"d":"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{"d":"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{"d":"M9 4.2V9m0 0H4.2M9 9 3 3"}]]
};

export const Shrink = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </svg>
  );
};

export default Shrink;

import React from 'react';

export const iconData = {
  id: "Text",
  name: "Text",
  category: "T",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M15 12H3"}],["path",{"d":"M17 19H3"}]]
};

export const Text = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M15 12H3" />
      <path d="M17 19H3" />
    </svg>
  );
};

export default Text;

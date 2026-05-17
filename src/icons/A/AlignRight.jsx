import React from 'react';

export const iconData = {
  id: "AlignRight",
  name: "AlignRight",
  category: "A",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M21 12H9"}],["path",{"d":"M21 19H7"}]]
};

export const AlignRight = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
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
      <path d="M21 12H9" />
      <path d="M21 19H7" />
    </svg>
  );
};

export default AlignRight;

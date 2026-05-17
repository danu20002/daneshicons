import React from 'react';

export const iconData = {
  id: "Terminal",
  name: "Terminal",
  category: "T",
  nodes: [["path",{"d":"M12 19h8"}],["path",{"d":"m4 17 6-6-6-6"}]]
};

export const Terminal = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 19h8" />
      <path d="m4 17 6-6-6-6" />
    </svg>
  );
};

export default Terminal;

import React from 'react';

export const iconData = {
  id: "Check",
  name: "Check",
  category: "C",
  nodes: [["path",{"d":"M20 6 9 17l-5-5"}]]
};

export const Check = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export default Check;

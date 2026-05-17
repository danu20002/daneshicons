import React from 'react';

export const iconData = {
  id: "CloudCheck",
  name: "CloudCheck",
  category: "C",
  nodes: [["path",{"d":"m17 15-5.5 5.5L9 18"}],["path",{"d":"M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327"}]]
};

export const CloudCheck = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m17 15-5.5 5.5L9 18" />
      <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />
    </svg>
  );
};

export default CloudCheck;

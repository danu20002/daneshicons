import React from 'react';

export const iconData = {
  id: "Loader2",
  name: "Loader2",
  category: "L",
  nodes: [["path",{"d":"M21 12a9 9 0 1 1-6.219-8.56"}]]
};

export const Loader2 = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default Loader2;

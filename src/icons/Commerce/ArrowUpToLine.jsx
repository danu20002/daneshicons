import React from 'react';

export const iconData = {
  "id": "arrowuptoline",
  "name": "ArrowUpToLine",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M5 3h14",
    "m18 13-6-6-6 6",
    "M12 7v14"
  ]
};

export const ArrowUpToLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 3h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m18 13-6-6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 7v14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpToLine;

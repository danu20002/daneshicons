import React from 'react';

export const iconData = {
  "id": "arrowlefttoline",
  "name": "ArrowLeftToLine",
  "category": "General",
  "type": "standard",
  "paths": [
    "M3 19V5",
    "m13 6-6 6 6 6",
    "M7 12h14"
  ]
};

export const ArrowLeftToLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 19V5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m13 6-6 6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowLeftToLine;

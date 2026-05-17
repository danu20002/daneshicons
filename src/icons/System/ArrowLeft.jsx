import React from 'react';

export const iconData = {
  "id": "arrowleft",
  "name": "ArrowLeft",
  "category": "System",
  "type": "standard",
  "paths": [
    "m12 19-7-7 7-7",
    "M19 12H5"
  ]
};

export const ArrowLeft = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m12 19-7-7 7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M19 12H5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowLeft;

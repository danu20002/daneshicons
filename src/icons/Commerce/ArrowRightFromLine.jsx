import React from 'react';

export const iconData = {
  "id": "arrowrightfromline",
  "name": "ArrowRightFromLine",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M3 5v14",
    "M21 12H7",
    "m15 18 6-6-6-6"
  ]
};

export const ArrowRightFromLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 5v14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 12H7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m15 18 6-6-6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowRightFromLine;

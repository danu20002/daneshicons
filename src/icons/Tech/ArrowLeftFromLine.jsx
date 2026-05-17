import React from 'react';

export const iconData = {
  "id": "arrowleftfromline",
  "name": "ArrowLeftFromLine",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "m9 6-6 6 6 6",
    "M3 12h14",
    "M21 19V5"
  ]
};

export const ArrowLeftFromLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m9 6-6 6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 19V5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowLeftFromLine;

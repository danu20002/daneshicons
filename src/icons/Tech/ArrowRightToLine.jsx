import React from 'react';

export const iconData = {
  "id": "arrowrighttoline",
  "name": "ArrowRightToLine",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M17 12H3",
    "m11 18 6-6-6-6",
    "M21 5v14"
  ]
};

export const ArrowRightToLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 12H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m11 18 6-6-6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 5v14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowRightToLine;

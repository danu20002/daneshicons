import React from 'react';

export const iconData = {
  "id": "arrowrightleft",
  "name": "ArrowRightLeft",
  "category": "System",
  "type": "standard",
  "paths": [
    "m16 3 4 4-4 4",
    "M20 7H4",
    "m8 21-4-4 4-4",
    "M4 17h16"
  ]
};

export const ArrowRightLeft = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m16 3 4 4-4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 7H4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m8 21-4-4 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 17h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowRightLeft;

import React from 'react';

export const iconData = {
  "id": "arrowleftright",
  "name": "ArrowLeftRight",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M8 3 4 7l4 4",
    "M4 7h16",
    "m16 21 4-4-4-4",
    "M20 17H4"
  ]
};

export const ArrowLeftRight = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 3 4 7l4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 7h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m16 21 4-4-4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 17H4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowLeftRight;

import React from 'react';

export const iconData = {
  "id": "arrowupleft",
  "name": "ArrowUpLeft",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M7 17V7h10",
    "M17 17 7 7"
  ]
};

export const ArrowUpLeft = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 17V7h10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 17 7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpLeft;

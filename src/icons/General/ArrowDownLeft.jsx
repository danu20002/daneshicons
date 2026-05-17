import React from 'react';

export const iconData = {
  "id": "arrowdownleft",
  "name": "ArrowDownLeft",
  "category": "General",
  "type": "standard",
  "paths": [
    "M17 7 7 17",
    "M17 17H7V7"
  ]
};

export const ArrowDownLeft = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M17 7 7 17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 17H7V7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownLeft;

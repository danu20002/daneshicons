import React from 'react';

export const iconData = {
  "id": "arrowup",
  "name": "ArrowUp",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "m5 12 7-7 7 7",
    "M12 19V5"
  ]
};

export const ArrowUp = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m5 12 7-7 7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 19V5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUp;

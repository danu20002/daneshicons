import React from 'react';

export const iconData = {
  "id": "arrow-right",
  "name": "ArrowRight",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M5 12h14",
    "M12 5l7 7-7 7"
  ]
};

export const ArrowRight = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowRight;

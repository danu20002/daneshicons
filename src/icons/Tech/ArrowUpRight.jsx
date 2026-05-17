import React from 'react';

export const iconData = {
  "id": "arrowupright",
  "name": "ArrowUpRight",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M7 7h10v10",
    "M7 17 17 7"
  ]
};

export const ArrowUpRight = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M7 7h10v10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpRight;

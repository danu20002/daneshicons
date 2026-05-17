import React from 'react';

export const iconData = {
  "id": "arrowdownup",
  "name": "ArrowDownUp",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "m3 16 4 4 4-4",
    "M7 20V4",
    "m21 8-4-4-4 4",
    "M17 4v16"
  ]
};

export const ArrowDownUp = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 16 4 4 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 20V4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m21 8-4-4-4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 4v16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownUp;

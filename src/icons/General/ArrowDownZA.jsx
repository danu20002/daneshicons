import React from 'react';

export const iconData = {
  "id": "arrowdownza",
  "name": "ArrowDownZA",
  "category": "General",
  "type": "standard",
  "paths": [
    "m3 16 4 4 4-4",
    "M7 4v16",
    "M15 4h5l-5 6h5",
    "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",
    "M20 18h-5"
  ]
};

export const ArrowDownZA = ({ size = 24, className = "", color = "currentColor" }) => {
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
      <path d="M7 4v16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 4h5l-5 6h5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 18h-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownZA;

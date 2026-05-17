import React from 'react';

export const iconData = {
  "id": "bedsingle",
  "name": "BedSingle",
  "category": "General",
  "type": "standard",
  "paths": [
    "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
    "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
    "M3 18h18"
  ]
};

export const BedSingle = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3 18h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BedSingle;

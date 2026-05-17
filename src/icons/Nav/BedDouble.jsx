import React from 'react';

export const iconData = {
  "id": "beddouble",
  "name": "BedDouble",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
    "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
    "M12 4v6",
    "M2 18h20"
  ]
};

export const BedDouble = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 4v6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 18h20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BedDouble;

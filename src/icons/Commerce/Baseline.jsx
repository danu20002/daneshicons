import React from 'react';

export const iconData = {
  "id": "baseline",
  "name": "Baseline",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M4 20h16",
    "m6 16 6-12 6 12",
    "M8 12h8"
  ]
};

export const Baseline = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4 20h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m6 16 6-12 6 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Baseline;

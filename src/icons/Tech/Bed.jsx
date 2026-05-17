import React from 'react';

export const iconData = {
  "id": "bed",
  "name": "Bed",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M2 4v16",
    "M2 8h18a2 2 0 0 1 2 2v10",
    "M2 17h20",
    "M6 8v9"
  ]
};

export const Bed = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 4v16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 17h20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 8v9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Bed;

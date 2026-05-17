import React from 'react';

export const iconData = {
  "id": "arrowupaz",
  "name": "ArrowUpAz",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "m3 8 4-4 4 4",
    "M7 4v16",
    "M20 8h-5",
    "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
    "M15 14h5l-5 6h5"
  ]
};

export const ArrowUpAz = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m3 8 4-4 4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 4v16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 8h-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 14h5l-5 6h5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpAz;

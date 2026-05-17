import React from 'react';

export const iconData = {
  "id": "arrowupnarrowwide",
  "name": "ArrowUpNarrowWide",
  "category": "System",
  "type": "standard",
  "paths": [
    "m3 8 4-4 4 4",
    "M7 4v16",
    "M11 12h4",
    "M11 16h7",
    "M11 20h10"
  ]
};

export const ArrowUpNarrowWide = ({ size = 24, className = "", color = "currentColor" }) => {
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
      <path d="M11 12h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 16h7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 20h10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpNarrowWide;

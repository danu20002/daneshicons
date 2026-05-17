import React from 'react';

export const iconData = {
  "id": "arrowdownwidenarrow",
  "name": "ArrowDownWideNarrow",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "m3 16 4 4 4-4",
    "M7 20V4",
    "M11 4h10",
    "M11 8h7",
    "M11 12h4"
  ]
};

export const ArrowDownWideNarrow = ({ size = 24, className = "", color = "currentColor" }) => {
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
      <path d="M11 4h10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 8h7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 12h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownWideNarrow;

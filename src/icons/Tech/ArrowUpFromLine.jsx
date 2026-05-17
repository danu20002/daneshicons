import React from 'react';

export const iconData = {
  "id": "arrowupfromline",
  "name": "ArrowUpFromLine",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "m18 9-6-6-6 6",
    "M12 3v14",
    "M5 21h14"
  ]
};

export const ArrowUpFromLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m18 9-6-6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 3v14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 21h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpFromLine;

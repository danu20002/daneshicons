import React from 'react';

export const iconData = {
  "id": "arrowdownfromline",
  "name": "ArrowDownFromLine",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M19 3H5",
    "M12 21V7",
    "m6 15 6 6 6-6"
  ]
};

export const ArrowDownFromLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M19 3H5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 21V7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m6 15 6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownFromLine;

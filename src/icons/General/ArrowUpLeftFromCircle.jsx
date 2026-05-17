import React from 'react';

export const iconData = {
  "id": "arrowupleftfromcircle",
  "name": "ArrowUpLeftFromCircle",
  "category": "General",
  "type": "standard",
  "paths": [
    "M2 8V2h6",
    "m2 2 10 10",
    "M12 2A10 10 0 1 1 2 12"
  ]
};

export const ArrowUpLeftFromCircle = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 8V2h6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 2 10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 2A10 10 0 1 1 2 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpLeftFromCircle;

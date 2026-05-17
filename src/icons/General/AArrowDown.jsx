import React from 'react';

export const iconData = {
  "id": "aarrowdown",
  "name": "AArrowDown",
  "category": "General",
  "type": "standard",
  "paths": [
    "m14 12 4 4 4-4",
    "M18 16V7",
    "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
    "M3.304 13h6.392"
  ]
};

export const AArrowDown = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m14 12 4 4 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 16V7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3.304 13h6.392" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default AArrowDown;

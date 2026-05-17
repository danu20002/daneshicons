import React from 'react';

export const iconData = {
  "id": "alargesmall",
  "name": "ALargeSmall",
  "category": "System",
  "type": "standard",
  "paths": [
    "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16",
    "M15.697 14h5.606",
    "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
    "M3.304 13h6.392"
  ]
};

export const ALargeSmall = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15.697 14h5.606" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3.304 13h6.392" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ALargeSmall;

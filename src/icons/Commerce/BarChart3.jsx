import React from 'react';

export const iconData = {
  "id": "barchart3",
  "name": "BarChart3",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M3 3v16a2 2 0 0 0 2 2h16",
    "M18 17V9",
    "M13 17V5",
    "M8 17v-3"
  ]
};

export const BarChart3 = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 17V9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 17V5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 17v-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BarChart3;

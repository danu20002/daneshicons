import React from 'react';

export const iconData = {
  "id": "barcharthorizontal",
  "name": "BarChartHorizontal",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M3 3v16a2 2 0 0 0 2 2h16",
    "M7 16h8",
    "M7 11h12",
    "M7 6h3"
  ]
};

export const BarChartHorizontal = ({ size = 24, className = "", color = "currentColor" }) => {
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
      <path d="M7 16h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 11h12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 6h3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BarChartHorizontal;

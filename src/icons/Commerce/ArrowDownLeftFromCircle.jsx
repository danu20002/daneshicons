import React from 'react';

export const iconData = {
  "id": "arrowdownleftfromcircle",
  "name": "ArrowDownLeftFromCircle",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M2 12a10 10 0 1 1 10 10",
    "m2 22 10-10",
    "M8 22H2v-6"
  ]
};

export const ArrowDownLeftFromCircle = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 12a10 10 0 1 1 10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 22 10-10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 22H2v-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownLeftFromCircle;

import React from 'react';

export const iconData = {
  "id": "arrowuprightfromcircle",
  "name": "ArrowUpRightFromCircle",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M22 12A10 10 0 1 1 12 2",
    "M22 2 12 12",
    "M16 2h6v6"
  ]
};

export const ArrowUpRightFromCircle = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 12A10 10 0 1 1 12 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 2 12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 2h6v6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowUpRightFromCircle;

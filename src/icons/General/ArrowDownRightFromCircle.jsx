import React from 'react';

export const iconData = {
  "id": "arrowdownrightfromcircle",
  "name": "ArrowDownRightFromCircle",
  "category": "General",
  "type": "standard",
  "paths": [
    "M12 22a10 10 0 1 1 10-10",
    "M22 22 12 12",
    "M22 16v6h-6"
  ]
};

export const ArrowDownRightFromCircle = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 22a10 10 0 1 1 10-10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 22 12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 16v6h-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownRightFromCircle;

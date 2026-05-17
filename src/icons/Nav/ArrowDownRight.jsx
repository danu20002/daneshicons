import React from 'react';

export const iconData = {
  "id": "arrowdownright",
  "name": "ArrowDownRight",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "m7 7 10 10",
    "M17 7v10H7"
  ]
};

export const ArrowDownRight = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 7 10 10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 7v10H7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownRight;

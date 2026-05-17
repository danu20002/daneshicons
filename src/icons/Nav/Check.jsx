import React from 'react';

export const iconData = {
  "id": "check",
  "name": "Check",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M20 6L9 17l-5-5"
  ]
};

export const Check = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Check;

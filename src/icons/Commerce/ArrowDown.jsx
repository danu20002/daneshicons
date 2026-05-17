import React from 'react';

export const iconData = {
  "id": "arrowdown",
  "name": "ArrowDown",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M12 5v14",
    "m19 12-7 7-7-7"
  ]
};

export const ArrowDown = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 5v14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m19 12-7 7-7-7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDown;

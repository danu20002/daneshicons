import React from 'react';

export const iconData = {
  "id": "brackets",
  "name": "Brackets",
  "category": "General",
  "type": "standard",
  "paths": [
    "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",
    "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"
  ]
};

export const Brackets = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Brackets;

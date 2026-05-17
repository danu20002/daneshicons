import React from 'react';

export const iconData = {
  "id": "beaker",
  "name": "Beaker",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M4.5 3h15",
    "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
    "M6 14h12"
  ]
};

export const Beaker = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M4.5 3h15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 14h12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Beaker;

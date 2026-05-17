import React from 'react';

export const iconData = {
  "id": "code",
  "name": "Code",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M16 18l6-6-6-6",
    "M8 6L2 12l6 6"
  ]
};

export const Code = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Code;

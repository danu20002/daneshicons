import React from 'react';

export const iconData = {
  "id": "alignleft",
  "name": "AlignLeft",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M21 5H3",
    "M15 12H3",
    "M17 19H3"
  ]
};

export const AlignLeft = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 5H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M15 12H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 19H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default AlignLeft;

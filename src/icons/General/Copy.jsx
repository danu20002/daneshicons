import React from 'react';

export const iconData = {
  "id": "copy",
  "name": "Copy",
  "category": "General",
  "type": "standard",
  "paths": [
    "M9 15H5a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4",
    "M13 10h6a2 2 0 012 2v8a2 2 0 01-2 2h-6a2 2 0 01-2-2v-8a2 2 0 012-2z"
  ]
};

export const Copy = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M9 15H5a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 10h6a2 2 0 012 2v8a2 2 0 01-2 2h-6a2 2 0 01-2-2v-8a2 2 0 012-2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Copy;

import React from 'react';

export const iconData = {
  "id": "upload",
  "name": "Upload",
  "category": "General",
  "type": "standard",
  "paths": [
    "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4",
    "M17 8l-5-5-5 5",
    "M12 3v12"
  ]
};

export const Upload = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 8l-5-5-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 3v12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Upload;

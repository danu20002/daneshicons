import React from 'react';

export const iconData = {
  "id": "moon",
  "name": "Moon",
  "category": "General",
  "type": "standard",
  "paths": [
    "M12 3a6 6 0 009 9 9 9 0 11-9-9z"
  ]
};

export const Moon = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Moon;

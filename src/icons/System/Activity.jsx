import React from 'react';

export const iconData = {
  "id": "activity",
  "name": "Activity",
  "category": "System",
  "type": "standard",
  "paths": [
    "M22 12h-4l-3 9L9 3l-3 9H2"
  ]
};

export const Activity = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Activity;

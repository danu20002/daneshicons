import React from 'react';

export const iconData = {
  "id": "database",
  "name": "Database",
  "category": "Tech",
  "type": "standard",
  "paths": [
    "M12 5c4.418 0 8-1.79 8-4S16.418 1 12 1 4 2.79 4 5s3.582 4 8 4z",
    "M4 5v6c0 2.21 3.582 4 8 4s8-1.79 8-4V5",
    "M4 11v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6"
  ]
};

export const Database = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 5c4.418 0 8-1.79 8-4S16.418 1 12 1 4 2.79 4 5s3.582 4 8 4z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 5v6c0 2.21 3.582 4 8 4s8-1.79 8-4V5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 11v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Database;

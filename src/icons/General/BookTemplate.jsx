import React from 'react';

export const iconData = {
  "id": "booktemplate",
  "name": "BookTemplate",
  "category": "General",
  "type": "standard",
  "paths": [
    "M12 17h1.5",
    "M12 22h1.5",
    "M12 2h1.5",
    "M17.5 22H19a1 1 0 0 0 1-1",
    "M17.5 2H19a1 1 0 0 1 1 1v1.5",
    "M20 14v3h-2.5",
    "M20 8.5V10",
    "M4 10V8.5",
    "M4 19.5V14",
    "M4 4.5A2.5 2.5 0 0 1 6.5 2H8",
    "M8 22H6.5a1 1 0 0 1 0-5H8"
  ]
};

export const BookTemplate = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 17h1.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 22h1.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 2h1.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17.5 22H19a1 1 0 0 0 1-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 14v3h-2.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 8.5V10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 10V8.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 19.5V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 22H6.5a1 1 0 0 1 0-5H8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BookTemplate;

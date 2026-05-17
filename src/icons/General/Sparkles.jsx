import React from 'react';

export const iconData = {
  "id": "sparkles",
  "name": "Sparkles",
  "category": "General",
  "type": "standard",
  "paths": [
    "M12 3v1",
    "M12 20v1",
    "M3 12h1",
    "M20 12h1",
    "M5.9 5.9l.7.7",
    "M17.4 17.4l.7.7",
    "M5.9 18.1l.7-.7",
    "M17.4 6.6l.7-.7",
    "M12 8a4 4 0 100 8 4 4 0 000-8z"
  ]
};

export const Sparkles = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 3v1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 20v1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3 12h1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 12h1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5.9 5.9l.7.7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17.4 17.4l.7.7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5.9 18.1l.7-.7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17.4 6.6l.7-.7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Sparkles;

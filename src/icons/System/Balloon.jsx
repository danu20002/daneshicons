import React from 'react';

export const iconData = {
  "id": "balloon",
  "name": "Balloon",
  "category": "System",
  "type": "standard",
  "paths": [
    "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",
    "M12 6a2 2 0 0 1 2 2",
    "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0"
  ]
};

export const Balloon = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 6a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Balloon;

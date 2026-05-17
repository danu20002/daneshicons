import React from 'react';

export const iconData = {
  "id": "aligncentervertical",
  "name": "AlignCenterVertical",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M12 2v20",
    "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",
    "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",
    "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",
    "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
  ]
};

export const AlignCenterVertical = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2v20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default AlignCenterVertical;

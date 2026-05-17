import React from 'react';

export const iconData = {
  "id": "aligncenterhorizontal",
  "name": "AlignCenterHorizontal",
  "category": "General",
  "type": "standard",
  "paths": [
    "M2 12h20",
    "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
    "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
    "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
    "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
  ]
};

export const AlignCenterHorizontal = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M2 12h20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default AlignCenterHorizontal;

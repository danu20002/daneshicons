import React from 'react';

export const iconData = {
  "id": "batterywarning",
  "name": "BatteryWarning",
  "category": "General",
  "type": "standard",
  "paths": [
    "M10 17h.01",
    "M10 7v6",
    "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2",
    "M22 14v-4",
    "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
  ]
};

export const BatteryWarning = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M10 17h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 7v6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M22 14v-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BatteryWarning;

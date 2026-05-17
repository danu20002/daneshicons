import React from 'react';

export const iconData = {
  "id": "bluetooth",
  "name": "Bluetooth",
  "category": "General",
  "type": "standard",
  "paths": [
    "m7 7 10 10-5 5V2l5 5L7 17"
  ]
};

export const Bluetooth = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Bluetooth;

import React from 'react';

export const iconData = {
  "id": "bluetoothoff",
  "name": "BluetoothOff",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "m17 17-5 5V12l-5 5",
    "m2 2 20 20",
    "M14.5 9.5 17 7l-5-5v4.5"
  ]
};

export const BluetoothOff = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="m17 17-5 5V12l-5 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 2 20 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14.5 9.5 17 7l-5-5v4.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default BluetoothOff;

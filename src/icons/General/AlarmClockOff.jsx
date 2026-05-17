import React from 'react';

export const iconData = {
  "id": "alarmclockoff",
  "name": "AlarmClockOff",
  "category": "General",
  "type": "standard",
  "paths": [
    "M6.87 6.87a8 8 0 1 0 11.26 11.26",
    "M19.9 14.25a8 8 0 0 0-9.15-9.15",
    "m22 6-3-3",
    "M6.26 18.67 4 21",
    "m2 2 20 20",
    "M4 4 2 6"
  ]
};

export const AlarmClockOff = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m22 6-3-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6.26 18.67 4 21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m2 2 20 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 4 2 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default AlarmClockOff;

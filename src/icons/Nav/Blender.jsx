import React from 'react';

export const iconData = {
  "id": "blender",
  "name": "Blender",
  "category": "Nav",
  "type": "standard",
  "paths": [
    "M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z",
    "m17 2-1 12",
    "M8.006 14 7 2",
    "M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75",
    "M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5",
    "M12 18h.01"
  ]
};

export const Blender = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m17 2-1 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8.006 14 7 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 18h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Blender;

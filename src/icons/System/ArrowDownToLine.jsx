import React from 'react';

export const iconData = {
  "id": "arrowdowntoline",
  "name": "ArrowDownToLine",
  "category": "System",
  "type": "standard",
  "paths": [
    "M12 17V3",
    "m6 11 6 6 6-6",
    "M19 21H5"
  ]
};

export const ArrowDownToLine = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 17V3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m6 11 6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M19 21H5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ArrowDownToLine;

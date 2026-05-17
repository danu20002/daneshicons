import React from 'react';

export const iconData = {
  "id": "asterisk",
  "name": "Asterisk",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M12 6v12",
    "M17.196 9 6.804 15",
    "m6.804 9 10.392 6"
  ]
};

export const Asterisk = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 6v12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17.196 9 6.804 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m6.804 9 10.392 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Asterisk;

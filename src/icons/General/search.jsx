import React from 'react';

export const iconData = {
  "id": "search",
  "name": "Search",
  "category": "General",
  "type": "standard",
  "paths": [
    "M11 19a8 8 0 100-16 8 8 0 000 16z",
    "M21 21l-4.35-4.35"
  ]
};

export const Search = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Search;

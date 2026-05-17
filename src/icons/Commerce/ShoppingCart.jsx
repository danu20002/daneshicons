import React from 'react';

export const iconData = {
  "id": "shopping-cart",
  "name": "ShoppingCart",
  "category": "Commerce",
  "type": "standard",
  "paths": [
    "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6",
    "M21 21a1 1 0 100-2 1 1 0 000 2z",
    "M9 21a1 1 0 100-2 1 1 0 000 2z"
  ]
};

export const ShoppingCart = ({ size = 24, className = "", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M9 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default ShoppingCart;

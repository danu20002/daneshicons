import React from 'react';

export const iconData = {
  "id": "XilograOnus",
  "name": "XilograOnus",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 7.99 a 6.94 2.081273414953062 0 1 0 13.88 0 a 6.94 2.081273414953062 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 2.4032475327607243 0 1 0 16.02 0 a 8.01 2.4032475327607243 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 16.01 a 6.94 2.081273414953062 0 1 0 13.88 0 a 6.94 2.081273414953062 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.99 A 2 2 0 0 0 12.00 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.99 A 2 2 0 0 1 12.00 20.01"
      }
    ]
  ]
};

export const XilograOnus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0" />
      <path d="M 5.06 7.99 a 6.94 2.081273414953062 0 1 0 13.88 0 a 6.94 2.081273414953062 0 1 0 -13.88 0" />
      <path d="M 3.99 12.00 a 8.01 2.4032475327607243 0 1 0 16.02 0 a 8.01 2.4032475327607243 0 1 0 -16.02 0" />
      <path d="M 5.06 16.01 a 6.94 2.081273414953062 0 1 0 13.88 0 a 6.94 2.081273414953062 0 1 0 -13.88 0" />
      <path d="M 12.00 3.99 A 2 2 0 0 0 12.00 20.01" />
      <path d="M 12.00 3.99 A 2 2 0 0 1 12.00 20.01" />
      {children}
    </svg>
  );
});

export default XilograOnus;

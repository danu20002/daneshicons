import React from 'react';

export const iconData = {
  "id": "UmbilicTurn",
  "name": "UmbilicTurn",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 9.26 a 7.75 2.32565439092147 0 1 0 15.50 0 a 7.75 2.32565439092147 0 1 0 -15.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 14.74 a 7.75 2.32565439092147 0 1 0 15.50 0 a 7.75 2.32565439092147 0 1 0 -15.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 A 2 2 0 0 0 12.00 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 A 2 2 0 0 1 12.00 20.22"
      }
    ]
  ]
};

export const UmbilicTurn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0" />
      <path d="M 4.25 9.26 a 7.75 2.32565439092147 0 1 0 15.50 0 a 7.75 2.32565439092147 0 1 0 -15.50 0" />
      <path d="M 4.25 14.74 a 7.75 2.32565439092147 0 1 0 15.50 0 a 7.75 2.32565439092147 0 1 0 -15.50 0" />
      <path d="M 12.00 3.78 A 2 2 0 0 0 12.00 20.22" />
      <path d="M 12.00 3.78 A 2 2 0 0 1 12.00 20.22" />
      {children}
    </svg>
  );
});

export default UmbilicTurn;

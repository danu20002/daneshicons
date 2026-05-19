import React from 'react';

export const iconData = {
  "id": "VerlenRascal",
  "name": "VerlenRascal",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 12.00 a 4.01 4.01 0 1 0 8.02 0 a 4.01 4.01 0 1 0 -8.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.32 0 a 5.66 5.66 0 1 0 -11.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const VerlenRascal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0" />
      <path d="M 7.99 12.00 a 4.01 4.01 0 1 0 8.02 0 a 4.01 4.01 0 1 0 -8.02 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.32 0 a 5.66 5.66 0 1 0 -11.32 0" />
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0" stroke-dasharray="4 3" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default VerlenRascal;

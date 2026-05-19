import React from 'react';

export const iconData = {
  "id": "SymbioRidge",
  "name": "SymbioRidge",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 8.24 0 1 0 16.47 0 a 8.24 8.24 0 1 0 -16.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 7.88 a 7.13 2.1397549991068083 0 1 0 14.27 0 a 7.13 2.1397549991068083 0 1 0 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 12.00 a 8.24 2.4707762494683263 0 1 0 16.47 0 a 8.24 2.4707762494683263 0 1 0 -16.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 16.12 a 7.13 2.1397549991068083 0 1 0 14.27 0 a 7.13 2.1397549991068083 0 1 0 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 A 2 2 0 0 0 16.12 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 A 2 2 0 0 1 16.12 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 A 2 2 0 0 0 7.88 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 A 2 2 0 0 1 7.88 19.13"
      }
    ]
  ]
};

export const SymbioRidge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 12.00 a 8.24 8.24 0 1 0 16.47 0 a 8.24 8.24 0 1 0 -16.47 0" />
      <path d="M 4.87 7.88 a 7.13 2.1397549991068083 0 1 0 14.27 0 a 7.13 2.1397549991068083 0 1 0 -14.27 0" />
      <path d="M 3.76 12.00 a 8.24 2.4707762494683263 0 1 0 16.47 0 a 8.24 2.4707762494683263 0 1 0 -16.47 0" />
      <path d="M 4.87 16.12 a 7.13 2.1397549991068083 0 1 0 14.27 0 a 7.13 2.1397549991068083 0 1 0 -14.27 0" />
      <path d="M 16.12 4.87 A 2 2 0 0 0 16.12 19.13" />
      <path d="M 16.12 4.87 A 2 2 0 0 1 16.12 19.13" />
      <path d="M 7.88 4.87 A 2 2 0 0 0 7.88 19.13" />
      <path d="M 7.88 4.87 A 2 2 0 0 1 7.88 19.13" />
      {children}
    </svg>
  );
});

export default SymbioRidge;

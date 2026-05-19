import React from 'react';

export const iconData = {
  "id": "PeriLimit",
  "name": "PeriLimit",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 9.13 a 8.11 2.431910618802415 0 1 0 16.21 0 a 8.11 2.431910618802415 0 1 0 -16.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 14.87 a 8.11 2.431910618802415 0 1 0 16.21 0 a 8.11 2.431910618802415 0 1 0 -16.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.08 5.92 A 2 2 0 0 0 18.08 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 18.08 5.92 A 2 2 0 0 1 18.08 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.40 A 2 2 0 0 0 12.00 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.40 A 2 2 0 0 1 12.00 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 5.92 A 2 2 0 0 0 5.92 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 5.92 A 2 2 0 0 1 5.92 18.08"
      }
    ]
  ]
};

export const PeriLimit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0" />
      <path d="M 3.89 9.13 a 8.11 2.431910618802415 0 1 0 16.21 0 a 8.11 2.431910618802415 0 1 0 -16.21 0" />
      <path d="M 3.89 14.87 a 8.11 2.431910618802415 0 1 0 16.21 0 a 8.11 2.431910618802415 0 1 0 -16.21 0" />
      <path d="M 18.08 5.92 A 2 2 0 0 0 18.08 18.08" />
      <path d="M 18.08 5.92 A 2 2 0 0 1 18.08 18.08" />
      <path d="M 12.00 3.40 A 2 2 0 0 0 12.00 20.60" />
      <path d="M 12.00 3.40 A 2 2 0 0 1 12.00 20.60" />
      <path d="M 5.92 5.92 A 2 2 0 0 0 5.92 18.08" />
      <path d="M 5.92 5.92 A 2 2 0 0 1 5.92 18.08" />
      {children}
    </svg>
  );
});

export default PeriLimit;

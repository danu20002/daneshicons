import React from 'react';

export const iconData = {
  "id": "RhodoSleeve",
  "name": "RhodoSleeve",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.81 4.82 C 13.02 8.78, 8.45 5.00, 21.60 15.87"
      }
    ],
    [
      "path",
      {
        "d": "M 2.41 3.97 C 11.13 14.09, 8.12 9.90, 21.06 18.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 8.86 C 16.50 11.50, 12.67 6.89, 16.84 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.15 7.21 C 12.05 17.71, 16.92 15.45, 19.45 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 3.73 C 12.78 13.21, 15.02 4.31, 18.95 18.71"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 2.73 C 19.54 5.71, 13.36 18.09, 21.31 17.30"
      }
    ]
  ]
};

export const RhodoSleeve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.81 4.82 C 13.02 8.78, 8.45 5.00, 21.60 15.87" />
      <path d="M 2.41 3.97 C 11.13 14.09, 8.12 9.90, 21.06 18.22" />
      <path d="M 6.60 8.86 C 16.50 11.50, 12.67 6.89, 16.84 16.80" />
      <path d="M 9.15 7.21 C 12.05 17.71, 16.92 15.45, 19.45 19.27" />
      <path d="M 2.90 3.73 C 12.78 13.21, 15.02 4.31, 18.95 18.71" />
      <path d="M 2.34 2.73 C 19.54 5.71, 13.36 18.09, 21.31 17.30" />
      {children}
    </svg>
  );
});

export default RhodoSleeve;

import React from 'react';

export const iconData = {
  "id": "VinileWit",
  "name": "VinileWit",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 7.58 a 7.65 2.294343706376744 0 1 0 15.30 0 a 7.65 2.294343706376744 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 2.649279912980273 0 1 0 17.66 0 a 8.83 2.649279912980273 0 1 0 -17.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 16.42 a 7.65 2.294343706376744 0 1 0 15.30 0 a 7.65 2.294343706376744 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 5.76 A 2 2 0 0 0 18.24 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 5.76 A 2 2 0 0 1 18.24 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 0 12.00 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 1 12.00 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 5.76 A 2 2 0 0 0 5.76 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 5.76 A 2 2 0 0 1 5.76 18.24"
      }
    ]
  ]
};

export const VinileWit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0" />
      <path d="M 4.35 7.58 a 7.65 2.294343706376744 0 1 0 15.30 0 a 7.65 2.294343706376744 0 1 0 -15.30 0" />
      <path d="M 3.17 12.00 a 8.83 2.649279912980273 0 1 0 17.66 0 a 8.83 2.649279912980273 0 1 0 -17.66 0" />
      <path d="M 4.35 16.42 a 7.65 2.294343706376744 0 1 0 15.30 0 a 7.65 2.294343706376744 0 1 0 -15.30 0" />
      <path d="M 18.24 5.76 A 2 2 0 0 0 18.24 18.24" />
      <path d="M 18.24 5.76 A 2 2 0 0 1 18.24 18.24" />
      <path d="M 12.00 3.17 A 2 2 0 0 0 12.00 20.83" />
      <path d="M 12.00 3.17 A 2 2 0 0 1 12.00 20.83" />
      <path d="M 5.76 5.76 A 2 2 0 0 0 5.76 18.24" />
      <path d="M 5.76 5.76 A 2 2 0 0 1 5.76 18.24" />
      {children}
    </svg>
  );
});

export default VinileWit;

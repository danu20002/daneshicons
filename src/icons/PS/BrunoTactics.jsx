import React from 'react';

export const iconData = {
  "id": "BrunoTactics",
  "name": "BrunoTactics",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 9.35 0 1 0 18.71 0 a 9.35 9.35 0 1 0 -18.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 7.32 a 8.10 2.430210593192476 0 1 0 16.20 0 a 8.10 2.430210593192476 0 1 0 -16.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 2.8061654803343115 0 1 0 18.71 0 a 9.35 2.8061654803343115 0 1 0 -18.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 16.68 a 8.10 2.430210593192476 0 1 0 16.20 0 a 8.10 2.430210593192476 0 1 0 -16.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.90 A 2 2 0 0 0 16.68 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.90 A 2 2 0 0 1 16.68 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.90 A 2 2 0 0 0 7.32 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.90 A 2 2 0 0 1 7.32 20.10"
      }
    ]
  ]
};

export const BrunoTactics = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 12.00 a 9.35 9.35 0 1 0 18.71 0 a 9.35 9.35 0 1 0 -18.71 0" />
      <path d="M 3.90 7.32 a 8.10 2.430210593192476 0 1 0 16.20 0 a 8.10 2.430210593192476 0 1 0 -16.20 0" />
      <path d="M 2.65 12.00 a 9.35 2.8061654803343115 0 1 0 18.71 0 a 9.35 2.8061654803343115 0 1 0 -18.71 0" />
      <path d="M 3.90 16.68 a 8.10 2.430210593192476 0 1 0 16.20 0 a 8.10 2.430210593192476 0 1 0 -16.20 0" />
      <path d="M 16.68 3.90 A 2 2 0 0 0 16.68 20.10" />
      <path d="M 16.68 3.90 A 2 2 0 0 1 16.68 20.10" />
      <path d="M 7.32 3.90 A 2 2 0 0 0 7.32 20.10" />
      <path d="M 7.32 3.90 A 2 2 0 0 1 7.32 20.10" />
      {children}
    </svg>
  );
});

export default BrunoTactics;

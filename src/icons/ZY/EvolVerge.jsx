import React from 'react';

export const iconData = {
  "id": "EvolVerge",
  "name": "EvolVerge",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 7.79 a 7.29 2.1870067264190536 0 1 0 14.58 0 a 7.29 2.1870067264190536 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 2.5253378444351253 0 1 0 16.84 0 a 8.42 2.5253378444351253 0 1 0 -16.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 16.21 a 7.29 2.1870067264190536 0 1 0 14.58 0 a 7.29 2.1870067264190536 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 6.05 A 2 2 0 0 0 17.95 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 6.05 A 2 2 0 0 1 17.95 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.58 A 2 2 0 0 0 12.00 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.58 A 2 2 0 0 1 12.00 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 6.05 A 2 2 0 0 0 6.05 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 6.05 A 2 2 0 0 1 6.05 17.95"
      }
    ]
  ]
};

export const EvolVerge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      <path d="M 4.71 7.79 a 7.29 2.1870067264190536 0 1 0 14.58 0 a 7.29 2.1870067264190536 0 1 0 -14.58 0" />
      <path d="M 3.58 12.00 a 8.42 2.5253378444351253 0 1 0 16.84 0 a 8.42 2.5253378444351253 0 1 0 -16.84 0" />
      <path d="M 4.71 16.21 a 7.29 2.1870067264190536 0 1 0 14.58 0 a 7.29 2.1870067264190536 0 1 0 -14.58 0" />
      <path d="M 17.95 6.05 A 2 2 0 0 0 17.95 17.95" />
      <path d="M 17.95 6.05 A 2 2 0 0 1 17.95 17.95" />
      <path d="M 12.00 3.58 A 2 2 0 0 0 12.00 20.42" />
      <path d="M 12.00 3.58 A 2 2 0 0 1 12.00 20.42" />
      <path d="M 6.05 6.05 A 2 2 0 0 0 6.05 17.95" />
      <path d="M 6.05 6.05 A 2 2 0 0 1 6.05 17.95" />
      {children}
    </svg>
  );
});

export default EvolVerge;

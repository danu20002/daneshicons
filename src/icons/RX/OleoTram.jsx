import React from 'react';

export const iconData = {
  "id": "OleoTram",
  "name": "OleoTram",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 12.00 a 9.66 9.66 0 1 0 19.32 0 a 9.66 9.66 0 1 0 -19.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 8.78 a 9.11 2.7319804391423155 0 1 0 18.21 0 a 9.11 2.7319804391423155 0 1 0 -18.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 15.22 a 9.11 2.7319804391423155 0 1 0 18.21 0 a 9.11 2.7319804391423155 0 1 0 -18.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.83 3.64 A 2 2 0 0 0 16.83 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 16.83 3.64 A 2 2 0 0 1 16.83 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 3.64 A 2 2 0 0 0 7.17 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 3.64 A 2 2 0 0 1 7.17 20.36"
      }
    ]
  ]
};

export const OleoTram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 12.00 a 9.66 9.66 0 1 0 19.32 0 a 9.66 9.66 0 1 0 -19.32 0" />
      <path d="M 2.89 8.78 a 9.11 2.7319804391423155 0 1 0 18.21 0 a 9.11 2.7319804391423155 0 1 0 -18.21 0" />
      <path d="M 2.89 15.22 a 9.11 2.7319804391423155 0 1 0 18.21 0 a 9.11 2.7319804391423155 0 1 0 -18.21 0" />
      <path d="M 16.83 3.64 A 2 2 0 0 0 16.83 20.36" />
      <path d="M 16.83 3.64 A 2 2 0 0 1 16.83 20.36" />
      <path d="M 7.17 3.64 A 2 2 0 0 0 7.17 20.36" />
      <path d="M 7.17 3.64 A 2 2 0 0 1 7.17 20.36" />
      {children}
    </svg>
  );
});

export default OleoTram;

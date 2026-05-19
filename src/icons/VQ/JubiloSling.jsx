import React from 'react';

export const iconData = {
  "id": "JubiloSling",
  "name": "JubiloSling",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 12.00 L 22.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 18.30 L 18.27 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 10.21 19.85 L 9.76 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 15.50 L 2.94 16.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 8.50 L 2.94 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 10.21 4.15 L 9.76 2.20"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 5.70 L 18.27 4.14"
      }
    ]
  ]
};

export const JubiloSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0" />
      <path d="M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0" />
      <path d="M 20.06 12.00 L 22.06 12.00" />
      <path d="M 17.02 18.30 L 18.27 19.86" />
      <path d="M 10.21 19.85 L 9.76 21.80" />
      <path d="M 4.74 15.50 L 2.94 16.36" />
      <path d="M 4.74 8.50 L 2.94 7.64" />
      <path d="M 10.21 4.15 L 9.76 2.20" />
      <path d="M 17.02 5.70 L 18.27 4.14" />
      {children}
    </svg>
  );
});

export default JubiloSling;

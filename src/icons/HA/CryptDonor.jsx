import React from 'react';

export const iconData = {
  "id": "CryptDonor",
  "name": "CryptDonor",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 12.00 a 5.75 5.75 0 1 1 11.50 0 a 5.75 5.75 0 1 1 -11.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 12.00 L 22.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 18.29 L 18.26 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 10.21 19.84 L 9.77 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 15.49 L 2.95 16.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 8.51 L 2.95 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 10.21 4.16 L 9.77 2.21"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 5.71 L 18.26 4.15"
      }
    ]
  ]
};

export const CryptDonor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0" />
      <path d="M 6.25 12.00 a 5.75 5.75 0 1 1 11.50 0 a 5.75 5.75 0 1 1 -11.50 0" />
      <path d="M 20.04 12.00 L 22.04 12.00" />
      <path d="M 17.01 18.29 L 18.26 19.85" />
      <path d="M 10.21 19.84 L 9.77 21.79" />
      <path d="M 4.76 15.49 L 2.95 16.36" />
      <path d="M 4.76 8.51 L 2.95 7.64" />
      <path d="M 10.21 4.16 L 9.77 2.21" />
      <path d="M 17.01 5.71 L 18.26 4.15" />
      {children}
    </svg>
  );
});

export default CryptDonor;

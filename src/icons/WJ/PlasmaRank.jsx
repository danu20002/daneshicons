import React from 'react';

export const iconData = {
  "id": "PlasmaRank",
  "name": "PlasmaRank",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 12.00 a 7.52 7.52 0 1 0 15.04 0 a 7.52 7.52 0 1 0 -15.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 12.00 a 4.92 4.92 0 1 1 9.84 0 a 4.92 4.92 0 1 1 -9.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 12.00 L 21.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 16.13 L 19.30 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.17 18.68 L 14.79 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.83 18.68 L 9.21 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 16.13 L 4.70 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 L 2.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 7.87 L 4.70 6.70"
      }
    ],
    [
      "path",
      {
        "d": "M 9.83 5.32 L 9.21 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 14.17 5.32 L 14.79 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 7.87 L 19.30 6.70"
      }
    ]
  ]
};

export const PlasmaRank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 12.00 a 7.52 7.52 0 1 0 15.04 0 a 7.52 7.52 0 1 0 -15.04 0" />
      <path d="M 7.08 12.00 a 4.92 4.92 0 1 1 9.84 0 a 4.92 4.92 0 1 1 -9.84 0" />
      <path d="M 19.02 12.00 L 21.02 12.00" />
      <path d="M 17.68 16.13 L 19.30 17.30" />
      <path d="M 14.17 18.68 L 14.79 20.58" />
      <path d="M 9.83 18.68 L 9.21 20.58" />
      <path d="M 6.32 16.13 L 4.70 17.30" />
      <path d="M 4.98 12.00 L 2.98 12.00" />
      <path d="M 6.32 7.87 L 4.70 6.70" />
      <path d="M 9.83 5.32 L 9.21 3.42" />
      <path d="M 14.17 5.32 L 14.79 3.42" />
      <path d="M 17.68 7.87 L 19.30 6.70" />
      {children}
    </svg>
  );
});

export default PlasmaRank;

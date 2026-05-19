import React from 'react';

export const iconData = {
  "id": "ZoccoloGossip",
  "name": "ZoccoloGossip",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.29 0 a 8.65 8.65 0 1 0 -17.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 12.00 a 6.31 6.31 0 1 1 12.63 0 a 6.31 6.31 0 1 1 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 12.00 L 22.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 16.79 L 20.21 17.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 19.75 L 15.14 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 19.75 L 8.86 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 16.79 L 3.79 17.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 L 1.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 7.21 L 3.79 6.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 4.25 L 8.86 2.35"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 4.25 L 15.14 2.35"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 7.21 L 20.21 6.04"
      }
    ]
  ]
};

export const ZoccoloGossip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.29 0 a 8.65 8.65 0 1 0 -17.29 0" />
      <path d="M 5.69 12.00 a 6.31 6.31 0 1 1 12.63 0 a 6.31 6.31 0 1 1 -12.63 0" />
      <path d="M 20.15 12.00 L 22.15 12.00" />
      <path d="M 18.59 16.79 L 20.21 17.96" />
      <path d="M 14.52 19.75 L 15.14 21.65" />
      <path d="M 9.48 19.75 L 8.86 21.65" />
      <path d="M 5.41 16.79 L 3.79 17.96" />
      <path d="M 3.85 12.00 L 1.85 12.00" />
      <path d="M 5.41 7.21 L 3.79 6.04" />
      <path d="M 9.48 4.25 L 8.86 2.35" />
      <path d="M 14.52 4.25 L 15.14 2.35" />
      <path d="M 18.59 7.21 L 20.21 6.04" />
      {children}
    </svg>
  );
});

export default ZoccoloGossip;

import React from 'react';

export const iconData = {
  "id": "StabiliElect",
  "name": "StabiliElect",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 12.00 a 7.16 7.16 0 1 0 14.33 0 a 7.16 7.16 0 1 0 -14.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 12.00 a 4.85 4.85 0 1 1 9.70 0 a 4.85 4.85 0 1 1 -9.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 12.00 L 20.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 17.21 L 17.40 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 18.50 L 10.07 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 14.89 L 4.19 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 9.11 L 4.19 8.24"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 5.50 L 10.07 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 6.79 L 17.40 5.23"
      }
    ]
  ]
};

export const StabiliElect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 12.00 a 7.16 7.16 0 1 0 14.33 0 a 7.16 7.16 0 1 0 -14.33 0" />
      <path d="M 7.15 12.00 a 4.85 4.85 0 1 1 9.70 0 a 4.85 4.85 0 1 1 -9.70 0" />
      <path d="M 18.66 12.00 L 20.66 12.00" />
      <path d="M 16.15 17.21 L 17.40 18.77" />
      <path d="M 10.52 18.50 L 10.07 20.45" />
      <path d="M 6.00 14.89 L 4.19 15.76" />
      <path d="M 6.00 9.11 L 4.19 8.24" />
      <path d="M 10.52 5.50 L 10.07 3.55" />
      <path d="M 16.15 6.79 L 17.40 5.23" />
      {children}
    </svg>
  );
});

export default StabiliElect;

import React from 'react';

export const iconData = {
  "id": "RacioPile",
  "name": "RacioPile",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 12.00 a 4.84 4.84 0 1 1 9.67 0 a 4.84 4.84 0 1 1 -9.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 12.00 L 20.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.81 16.81 L 18.22 18.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.80 L 12.00 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 16.81 L 5.78 18.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 12.00 L 3.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 7.19 L 5.78 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.20 L 12.00 3.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.81 7.19 L 18.22 5.78"
      }
    ]
  ]
};

export const RacioPile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0" />
      <path d="M 7.16 12.00 a 4.84 4.84 0 1 1 9.67 0 a 4.84 4.84 0 1 1 -9.67 0" />
      <path d="M 18.80 12.00 L 20.80 12.00" />
      <path d="M 16.81 16.81 L 18.22 18.22" />
      <path d="M 12.00 18.80 L 12.00 20.80" />
      <path d="M 7.19 16.81 L 5.78 18.22" />
      <path d="M 5.20 12.00 L 3.20 12.00" />
      <path d="M 7.19 7.19 L 5.78 5.78" />
      <path d="M 12.00 5.20 L 12.00 3.20" />
      <path d="M 16.81 7.19 L 18.22 5.78" />
      {children}
    </svg>
  );
});

export default RacioPile;

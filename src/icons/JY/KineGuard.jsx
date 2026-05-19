import React from 'react';

export const iconData = {
  "id": "KineGuard",
  "name": "KineGuard",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 12.00 a 6.24 6.24 0 1 1 12.48 0 a 6.24 6.24 0 1 1 -12.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 12.00 L 21.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 16.29 L 20.35 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 15.29 19.21 L 16.13 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 19.85 L 10.59 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 17.99 L 5.50 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 14.23 L 2.47 14.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 9.77 L 2.47 9.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 6.01 L 5.50 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 4.15 L 10.59 2.17"
      }
    ],
    [
      "path",
      {
        "d": "M 15.29 4.79 L 16.13 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 7.71 L 20.35 6.63"
      }
    ]
  ]
};

export const KineGuard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0" />
      <path d="M 5.76 12.00 a 6.24 6.24 0 1 1 12.48 0 a 6.24 6.24 0 1 1 -12.48 0" />
      <path d="M 19.93 12.00 L 21.93 12.00" />
      <path d="M 18.67 16.29 L 20.35 17.37" />
      <path d="M 15.29 19.21 L 16.13 21.03" />
      <path d="M 10.87 19.85 L 10.59 21.83" />
      <path d="M 6.81 17.99 L 5.50 19.51" />
      <path d="M 4.39 14.23 L 2.47 14.80" />
      <path d="M 4.39 9.77 L 2.47 9.20" />
      <path d="M 6.81 6.01 L 5.50 4.49" />
      <path d="M 10.87 4.15 L 10.59 2.17" />
      <path d="M 15.29 4.79 L 16.13 2.97" />
      <path d="M 18.67 7.71 L 20.35 6.63" />
      {children}
    </svg>
  );
});

export default KineGuard;

import React from 'react';

export const iconData = {
  "id": "PerloShed",
  "name": "PerloShed",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.83 0 a 7.41 7.41 0 1 0 -14.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 12.00 a 4.77 4.77 0 1 1 9.55 0 a 4.77 4.77 0 1 1 -9.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 12.00 L 20.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.30 16.44 L 18.83 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 13.20 18.81 L 13.55 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 17.99 L 7.54 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 14.36 L 3.62 15.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 9.64 L 3.62 8.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 6.01 L 7.54 4.28"
      }
    ],
    [
      "path",
      {
        "d": "M 13.20 5.19 L 13.55 3.22"
      }
    ],
    [
      "path",
      {
        "d": "M 17.30 7.56 L 18.83 6.27"
      }
    ]
  ]
};

export const PerloShed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.83 0 a 7.41 7.41 0 1 0 -14.83 0" />
      <path d="M 7.23 12.00 a 4.77 4.77 0 1 1 9.55 0 a 4.77 4.77 0 1 1 -9.55 0" />
      <path d="M 18.91 12.00 L 20.91 12.00" />
      <path d="M 17.30 16.44 L 18.83 17.73" />
      <path d="M 13.20 18.81 L 13.55 20.78" />
      <path d="M 8.54 17.99 L 7.54 19.72" />
      <path d="M 5.50 14.36 L 3.62 15.05" />
      <path d="M 5.50 9.64 L 3.62 8.95" />
      <path d="M 8.54 6.01 L 7.54 4.28" />
      <path d="M 13.20 5.19 L 13.55 3.22" />
      <path d="M 17.30 7.56 L 18.83 6.27" />
      {children}
    </svg>
  );
});

export default PerloShed;

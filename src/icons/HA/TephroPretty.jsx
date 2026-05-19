import React from 'react';

export const iconData = {
  "id": "TephroPretty",
  "name": "TephroPretty",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 1 12.31 0 a 6.15 6.15 0 1 1 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.05 12.00 L 22.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 16.35 L 20.45 17.43"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 19.32 L 16.17 21.14"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 19.97 L 10.57 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 18.08 L 5.42 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 14.27 L 2.36 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 9.73 L 2.36 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 5.92 L 5.42 4.41"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 4.03 L 10.57 2.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 4.68 L 16.17 2.86"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 7.65 L 20.45 6.57"
      }
    ]
  ]
};

export const TephroPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 1 12.31 0 a 6.15 6.15 0 1 1 -12.31 0" />
      <path d="M 20.05 12.00 L 22.05 12.00" />
      <path d="M 18.77 16.35 L 20.45 17.43" />
      <path d="M 15.34 19.32 L 16.17 21.14" />
      <path d="M 10.85 19.97 L 10.57 21.95" />
      <path d="M 6.73 18.08 L 5.42 19.59" />
      <path d="M 4.28 14.27 L 2.36 14.83" />
      <path d="M 4.28 9.73 L 2.36 9.17" />
      <path d="M 6.73 5.92 L 5.42 4.41" />
      <path d="M 10.85 4.03 L 10.57 2.05" />
      <path d="M 15.34 4.68 L 16.17 2.86" />
      <path d="M 18.77 7.65 L 20.45 6.57" />
      {children}
    </svg>
  );
});

export default TephroPretty;

import React from 'react';

export const iconData = {
  "id": "ScorpiDuke",
  "name": "ScorpiDuke",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 12.00 a 7.99 7.99 0 1 0 15.99 0 a 7.99 7.99 0 1 0 -15.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 1 12.71 0 a 6.35 6.35 0 1 1 -12.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 12.00 L 21.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.30 16.05 L 19.99 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 15.11 18.82 L 15.94 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 19.42 L 10.65 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 17.66 L 5.78 19.17"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 14.11 L 2.89 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 9.89 L 2.89 9.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 6.34 L 5.78 4.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 4.58 L 10.65 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.11 5.18 L 15.94 3.36"
      }
    ],
    [
      "path",
      {
        "d": "M 18.30 7.95 L 19.99 6.87"
      }
    ]
  ]
};

export const ScorpiDuke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 12.00 a 7.99 7.99 0 1 0 15.99 0 a 7.99 7.99 0 1 0 -15.99 0" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 1 12.71 0 a 6.35 6.35 0 1 1 -12.71 0" />
      <path d="M 19.49 12.00 L 21.49 12.00" />
      <path d="M 18.30 16.05 L 19.99 17.13" />
      <path d="M 15.11 18.82 L 15.94 20.64" />
      <path d="M 10.93 19.42 L 10.65 21.40" />
      <path d="M 7.09 17.66 L 5.78 19.17" />
      <path d="M 4.81 14.11 L 2.89 14.67" />
      <path d="M 4.81 9.89 L 2.89 9.33" />
      <path d="M 7.09 6.34 L 5.78 4.83" />
      <path d="M 10.93 4.58 L 10.65 2.60" />
      <path d="M 15.11 5.18 L 15.94 3.36" />
      <path d="M 18.30 7.95 L 19.99 6.87" />
      {children}
    </svg>
  );
});

export default ScorpiDuke;

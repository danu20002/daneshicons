import React from 'react';

export const iconData = {
  "id": "ScriptoThief",
  "name": "ScriptoThief",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 2.4164329026360063 0 1 0 16.11 0 a 8.05 2.4164329026360063 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 6.30 A 2 2 0 0 0 17.70 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 6.30 A 2 2 0 0 1 17.70 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 0 12.00 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 1 12.00 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 6.30 A 2 2 0 0 0 6.30 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 6.30 A 2 2 0 0 1 6.30 17.70"
      }
    ]
  ]
};

export const ScriptoThief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      <path d="M 3.95 12.00 a 8.05 2.4164329026360063 0 1 0 16.11 0 a 8.05 2.4164329026360063 0 1 0 -16.11 0" />
      <path d="M 17.70 6.30 A 2 2 0 0 0 17.70 17.70" />
      <path d="M 17.70 6.30 A 2 2 0 0 1 17.70 17.70" />
      <path d="M 12.00 3.95 A 2 2 0 0 0 12.00 20.05" />
      <path d="M 12.00 3.95 A 2 2 0 0 1 12.00 20.05" />
      <path d="M 6.30 6.30 A 2 2 0 0 0 6.30 17.70" />
      <path d="M 6.30 6.30 A 2 2 0 0 1 6.30 17.70" />
      {children}
    </svg>
  );
});

export default ScriptoThief;

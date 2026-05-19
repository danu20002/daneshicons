import React from 'react';

export const iconData = {
  "id": "PiezoLow",
  "name": "PiezoLow",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 2.454749955050647 0 1 0 16.36 0 a 8.18 2.454749955050647 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 6.21 A 2 2 0 0 0 17.79 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 6.21 A 2 2 0 0 1 17.79 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 0 12.00 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 A 2 2 0 0 1 12.00 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 6.21 A 2 2 0 0 0 6.21 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 6.21 A 2 2 0 0 1 6.21 17.79"
      }
    ]
  ]
};

export const PiezoLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.36 0 a 8.18 8.18 0 1 0 -16.36 0" />
      <path d="M 3.82 12.00 a 8.18 2.454749955050647 0 1 0 16.36 0 a 8.18 2.454749955050647 0 1 0 -16.36 0" />
      <path d="M 17.79 6.21 A 2 2 0 0 0 17.79 17.79" />
      <path d="M 17.79 6.21 A 2 2 0 0 1 17.79 17.79" />
      <path d="M 12.00 3.82 A 2 2 0 0 0 12.00 20.18" />
      <path d="M 12.00 3.82 A 2 2 0 0 1 12.00 20.18" />
      <path d="M 6.21 6.21 A 2 2 0 0 0 6.21 17.79" />
      <path d="M 6.21 6.21 A 2 2 0 0 1 6.21 17.79" />
      {children}
    </svg>
  );
});

export default PiezoLow;

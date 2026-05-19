import React from 'react';

export const iconData = {
  "id": "SimulRiddle",
  "name": "SimulRiddle",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 12.00 a 3.80 3.80 0 1 0 7.60 0 a 3.80 3.80 0 1 0 -7.60 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ]
  ]
};

export const SimulRiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0" />
      <path d="M 8.20 12.00 a 3.80 3.80 0 1 0 7.60 0 a 3.80 3.80 0 1 0 -7.60 0" stroke-dasharray="2 1" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0" />
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0" />
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      {children}
    </svg>
  );
});

export default SimulRiddle;

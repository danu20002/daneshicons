import React from 'react';

export const iconData = {
  "id": "SimulMark",
  "name": "SimulMark",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.28 12.00 Q 16.36 13.17 20.04 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 16.64 Q 15.19 15.19 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 20.04 Q 13.17 16.36 12.00 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.28 Q 10.83 16.36 7.36 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 20.04 Q 8.81 15.19 3.96 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 16.64 Q 7.64 13.17 2.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 12.00 Q 7.64 10.83 3.96 7.36"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 7.36 Q 8.81 8.81 7.36 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.96 Q 10.83 7.64 12.00 2.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.72 Q 13.17 7.64 16.64 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.96 Q 15.19 8.81 20.04 7.36"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 7.36 Q 16.36 10.83 21.28 12.00"
      }
    ]
  ]
};

export const SimulMark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.28 12.00 Q 16.36 13.17 20.04 16.64" />
      <path d="M 20.04 16.64 Q 15.19 15.19 16.64 20.04" />
      <path d="M 16.64 20.04 Q 13.17 16.36 12.00 21.28" />
      <path d="M 12.00 21.28 Q 10.83 16.36 7.36 20.04" />
      <path d="M 7.36 20.04 Q 8.81 15.19 3.96 16.64" />
      <path d="M 3.96 16.64 Q 7.64 13.17 2.72 12.00" />
      <path d="M 2.72 12.00 Q 7.64 10.83 3.96 7.36" />
      <path d="M 3.96 7.36 Q 8.81 8.81 7.36 3.96" />
      <path d="M 7.36 3.96 Q 10.83 7.64 12.00 2.72" />
      <path d="M 12.00 2.72 Q 13.17 7.64 16.64 3.96" />
      <path d="M 16.64 3.96 Q 15.19 8.81 20.04 7.36" />
      <path d="M 20.04 7.36 Q 16.36 10.83 21.28 12.00" />
      {children}
    </svg>
  );
});

export default SimulMark;

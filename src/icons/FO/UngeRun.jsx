import React from 'react';

export const iconData = {
  "id": "UngeRun",
  "name": "UngeRun",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 12.00 a 5.51 5.51 0 1 1 11.03 0 a 5.51 5.51 0 1 1 -11.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 12.00 L 20.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.13 17.17 L 17.37 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 10.53 18.45 L 10.08 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 14.87 L 4.24 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 9.13 L 4.24 8.26"
      }
    ],
    [
      "path",
      {
        "d": "M 10.53 5.55 L 10.08 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.13 6.83 L 17.37 5.26"
      }
    ]
  ]
};

export const UngeRun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0" />
      <path d="M 6.49 12.00 a 5.51 5.51 0 1 1 11.03 0 a 5.51 5.51 0 1 1 -11.03 0" />
      <path d="M 18.62 12.00 L 20.62 12.00" />
      <path d="M 16.13 17.17 L 17.37 18.74" />
      <path d="M 10.53 18.45 L 10.08 20.40" />
      <path d="M 6.04 14.87 L 4.24 15.74" />
      <path d="M 6.04 9.13 L 4.24 8.26" />
      <path d="M 10.53 5.55 L 10.08 3.60" />
      <path d="M 16.13 6.83 L 17.37 5.26" />
      {children}
    </svg>
  );
});

export default UngeRun;

import React from 'react';

export const iconData = {
  "id": "FulgoDice",
  "name": "FulgoDice",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 12.00 a 7.70 7.70 0 1 0 15.41 0 a 7.70 7.70 0 1 0 -15.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 12.00 a 5.92 5.92 0 1 1 11.84 0 a 5.92 5.92 0 1 1 -11.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 12.00 L 21.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 17.63 L 17.74 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 19.02 L 9.95 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 15.13 L 3.71 15.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 8.87 L 3.71 8.01"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 4.98 L 9.95 3.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 6.37 L 17.74 4.80"
      }
    ]
  ]
};

export const FulgoDice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 12.00 a 7.70 7.70 0 1 0 15.41 0 a 7.70 7.70 0 1 0 -15.41 0" />
      <path d="M 6.08 12.00 a 5.92 5.92 0 1 1 11.84 0 a 5.92 5.92 0 1 1 -11.84 0" />
      <path d="M 19.20 12.00 L 21.20 12.00" />
      <path d="M 16.49 17.63 L 17.74 19.20" />
      <path d="M 10.40 19.02 L 9.95 20.97" />
      <path d="M 5.51 15.13 L 3.71 15.99" />
      <path d="M 5.51 8.87 L 3.71 8.01" />
      <path d="M 10.40 4.98 L 9.95 3.03" />
      <path d="M 16.49 6.37 L 17.74 4.80" />
      {children}
    </svg>
  );
});

export default FulgoDice;

import React from 'react';

export const iconData = {
  "id": "OncoWield",
  "name": "OncoWield",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 1 12.16 0 a 6.08 6.08 0 1 1 -12.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 12.00 L 21.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 18.20 L 18.19 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 19.74 L 9.79 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 15.44 L 3.05 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 8.56 L 3.05 7.69"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 4.26 L 9.79 2.31"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 5.80 L 18.19 4.23"
      }
    ]
  ]
};

export const OncoWield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 1 12.16 0 a 6.08 6.08 0 1 1 -12.16 0" />
      <path d="M 19.94 12.00 L 21.94 12.00" />
      <path d="M 16.95 18.20 L 18.19 19.77" />
      <path d="M 10.23 19.74 L 9.79 21.69" />
      <path d="M 4.85 15.44 L 3.05 16.31" />
      <path d="M 4.85 8.56 L 3.05 7.69" />
      <path d="M 10.23 4.26 L 9.79 2.31" />
      <path d="M 16.95 5.80 L 18.19 4.23" />
      {children}
    </svg>
  );
});

export default OncoWield;

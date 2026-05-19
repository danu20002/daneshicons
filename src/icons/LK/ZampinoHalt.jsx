import React from 'react';

export const iconData = {
  "id": "ZampinoHalt",
  "name": "ZampinoHalt",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 12.00 a 4.96 4.96 0 1 1 9.92 0 a 4.96 4.96 0 1 1 -9.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 12.00 L 21.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 16.32 L 19.57 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.27 19.00 L 14.89 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 19.00 L 9.11 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 16.32 L 4.43 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 L 2.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 7.68 L 4.43 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 5.00 L 9.11 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 14.27 5.00 L 14.89 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 7.68 L 19.57 6.50"
      }
    ]
  ]
};

export const ZampinoHalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0" />
      <path d="M 7.04 12.00 a 4.96 4.96 0 1 1 9.92 0 a 4.96 4.96 0 1 1 -9.92 0" />
      <path d="M 19.36 12.00 L 21.36 12.00" />
      <path d="M 17.95 16.32 L 19.57 17.50" />
      <path d="M 14.27 19.00 L 14.89 20.90" />
      <path d="M 9.73 19.00 L 9.11 20.90" />
      <path d="M 6.05 16.32 L 4.43 17.50" />
      <path d="M 4.64 12.00 L 2.64 12.00" />
      <path d="M 6.05 7.68 L 4.43 6.50" />
      <path d="M 9.73 5.00 L 9.11 3.10" />
      <path d="M 14.27 5.00 L 14.89 3.10" />
      <path d="M 17.95 7.68 L 19.57 6.50" />
      {children}
    </svg>
  );
});

export default ZampinoHalt;

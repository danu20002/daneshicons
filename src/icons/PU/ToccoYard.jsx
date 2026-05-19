import React from 'react';

export const iconData = {
  "id": "ToccoYard",
  "name": "ToccoYard",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 12.00 L 21.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 16.30 L 19.54 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 18.96 L 14.88 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 18.96 L 9.12 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 16.30 L 4.46 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 12.00 L 2.68 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 7.70 L 4.46 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 5.04 L 9.12 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 5.04 L 14.88 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 7.70 L 19.54 6.52"
      }
    ]
  ]
};

export const ToccoYard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0" />
      <path d="M 19.32 12.00 L 21.32 12.00" />
      <path d="M 17.92 16.30 L 19.54 17.48" />
      <path d="M 14.26 18.96 L 14.88 20.87" />
      <path d="M 9.74 18.96 L 9.12 20.87" />
      <path d="M 6.08 16.30 L 4.46 17.48" />
      <path d="M 4.68 12.00 L 2.68 12.00" />
      <path d="M 6.08 7.70 L 4.46 6.52" />
      <path d="M 9.74 5.04 L 9.12 3.13" />
      <path d="M 14.26 5.04 L 14.88 3.13" />
      <path d="M 17.92 7.70 L 19.54 6.52" />
      {children}
    </svg>
  );
});

export default ToccoYard;

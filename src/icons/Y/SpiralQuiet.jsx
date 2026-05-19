import React from 'react';

export const iconData = {
  "id": "SpiralQuiet",
  "name": "SpiralQuiet",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 12.00 a 4.75 4.75 0 1 1 9.51 0 a 4.75 4.75 0 1 1 -9.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 12.00 L 20.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 17.14 L 17.35 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 18.41 L 10.09 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 14.85 L 4.27 15.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 9.15 L 4.27 8.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.54 5.59 L 10.09 3.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 6.86 L 17.35 5.30"
      }
    ]
  ]
};

export const SpiralQuiet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0" />
      <path d="M 7.25 12.00 a 4.75 4.75 0 1 1 9.51 0 a 4.75 4.75 0 1 1 -9.51 0" />
      <path d="M 18.58 12.00 L 20.58 12.00" />
      <path d="M 16.10 17.14 L 17.35 18.70" />
      <path d="M 10.54 18.41 L 10.09 20.36" />
      <path d="M 6.08 14.85 L 4.27 15.72" />
      <path d="M 6.08 9.15 L 4.27 8.28" />
      <path d="M 10.54 5.59 L 10.09 3.64" />
      <path d="M 16.10 6.86 L 17.35 5.30" />
      {children}
    </svg>
  );
});

export default SpiralQuiet;

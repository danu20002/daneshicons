import React from 'react';

export const iconData = {
  "id": "TromboMascot",
  "name": "TromboMascot",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 9.12 a 8.14 2.4423117729676025 0 1 0 16.28 0 a 8.14 2.4423117729676025 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 14.88 a 8.14 2.4423117729676025 0 1 0 16.28 0 a 8.14 2.4423117729676025 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 4.52 A 2 2 0 0 0 16.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 4.52 A 2 2 0 0 1 16.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.52 A 2 2 0 0 0 7.68 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.52 A 2 2 0 0 1 7.68 19.48"
      }
    ]
  ]
};

export const TromboMascot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0" />
      <path d="M 3.86 9.12 a 8.14 2.4423117729676025 0 1 0 16.28 0 a 8.14 2.4423117729676025 0 1 0 -16.28 0" />
      <path d="M 3.86 14.88 a 8.14 2.4423117729676025 0 1 0 16.28 0 a 8.14 2.4423117729676025 0 1 0 -16.28 0" />
      <path d="M 16.32 4.52 A 2 2 0 0 0 16.32 19.48" />
      <path d="M 16.32 4.52 A 2 2 0 0 1 16.32 19.48" />
      <path d="M 7.68 4.52 A 2 2 0 0 0 7.68 19.48" />
      <path d="M 7.68 4.52 A 2 2 0 0 1 7.68 19.48" />
      {children}
    </svg>
  );
});

export default TromboMascot;

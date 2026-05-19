import React from 'react';

export const iconData = {
  "id": "LatexoProblem",
  "name": "LatexoProblem",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 9.31 a 7.61 2.2825698485247754 0 1 0 15.22 0 a 7.61 2.2825698485247754 0 1 0 -15.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 14.69 a 7.61 2.2825698485247754 0 1 0 15.22 0 a 7.61 2.2825698485247754 0 1 0 -15.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 6.29 A 2 2 0 0 0 17.71 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 6.29 A 2 2 0 0 1 17.71 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 A 2 2 0 0 0 12.00 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 A 2 2 0 0 1 12.00 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 6.29 A 2 2 0 0 0 6.29 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 6.29 A 2 2 0 0 1 6.29 17.71"
      }
    ]
  ]
};

export const LatexoProblem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0" />
      <path d="M 4.39 9.31 a 7.61 2.2825698485247754 0 1 0 15.22 0 a 7.61 2.2825698485247754 0 1 0 -15.22 0" />
      <path d="M 4.39 14.69 a 7.61 2.2825698485247754 0 1 0 15.22 0 a 7.61 2.2825698485247754 0 1 0 -15.22 0" />
      <path d="M 17.71 6.29 A 2 2 0 0 0 17.71 17.71" />
      <path d="M 17.71 6.29 A 2 2 0 0 1 17.71 17.71" />
      <path d="M 12.00 3.93 A 2 2 0 0 0 12.00 20.07" />
      <path d="M 12.00 3.93 A 2 2 0 0 1 12.00 20.07" />
      <path d="M 6.29 6.29 A 2 2 0 0 0 6.29 17.71" />
      <path d="M 6.29 6.29 A 2 2 0 0 1 6.29 17.71" />
      {children}
    </svg>
  );
});

export default LatexoProblem;

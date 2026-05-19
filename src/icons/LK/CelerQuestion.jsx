import React from 'react';

export const iconData = {
  "id": "CelerQuestion",
  "name": "CelerQuestion",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 12.00 a 6.83 6.83 0 1 1 13.65 0 a 6.83 6.83 0 1 1 -13.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 12.00 L 21.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 16.24 L 20.28 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 19.13 L 16.09 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 19.76 L 10.60 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 17.93 L 5.55 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 14.21 L 2.56 14.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 9.79 L 2.56 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.07 L 5.55 4.56"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 4.24 L 10.60 2.26"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 4.87 L 16.09 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 7.76 L 20.28 6.68"
      }
    ]
  ]
};

export const CelerQuestion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0" />
      <path d="M 5.17 12.00 a 6.83 6.83 0 1 1 13.65 0 a 6.83 6.83 0 1 1 -13.65 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 18.60 16.24 L 20.28 17.32" />
      <path d="M 15.26 19.13 L 16.09 20.95" />
      <path d="M 10.88 19.76 L 10.60 21.74" />
      <path d="M 6.86 17.93 L 5.55 19.44" />
      <path d="M 4.48 14.21 L 2.56 14.77" />
      <path d="M 4.48 9.79 L 2.56 9.23" />
      <path d="M 6.86 6.07 L 5.55 4.56" />
      <path d="M 10.88 4.24 L 10.60 2.26" />
      <path d="M 15.26 4.87 L 16.09 3.05" />
      <path d="M 18.60 7.76 L 20.28 6.68" />
      {children}
    </svg>
  );
});

export default CelerQuestion;

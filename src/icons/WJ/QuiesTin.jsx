import React from 'react';

export const iconData = {
  "id": "QuiesTin",
  "name": "QuiesTin",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 12.00 a 5.15 5.15 0 1 1 10.30 0 a 5.15 5.15 0 1 1 -10.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 12.00 L 21.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 16.27 L 19.49 17.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.24 18.90 L 14.86 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 18.90 L 9.14 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 16.27 L 4.51 17.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 12.00 L 2.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 7.73 L 4.51 6.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 5.10 L 9.14 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 14.24 5.10 L 14.86 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 7.73 L 19.49 6.56"
      }
    ]
  ]
};

export const QuiesTin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0" />
      <path d="M 6.85 12.00 a 5.15 5.15 0 1 1 10.30 0 a 5.15 5.15 0 1 1 -10.30 0" />
      <path d="M 19.26 12.00 L 21.26 12.00" />
      <path d="M 17.87 16.27 L 19.49 17.44" />
      <path d="M 14.24 18.90 L 14.86 20.81" />
      <path d="M 9.76 18.90 L 9.14 20.81" />
      <path d="M 6.13 16.27 L 4.51 17.44" />
      <path d="M 4.74 12.00 L 2.74 12.00" />
      <path d="M 6.13 7.73 L 4.51 6.56" />
      <path d="M 9.76 5.10 L 9.14 3.19" />
      <path d="M 14.24 5.10 L 14.86 3.19" />
      <path d="M 17.87 7.73 L 19.49 6.56" />
      {children}
    </svg>
  );
});

export default QuiesTin;

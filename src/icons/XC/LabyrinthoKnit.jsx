import React from 'react';

export const iconData = {
  "id": "LabyrinthoKnit",
  "name": "LabyrinthoKnit",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 12.00 a 5.97 5.97 0 1 1 11.93 0 a 5.97 5.97 0 1 1 -11.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 12.00 L 21.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 18.86 L 16.96 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 18.86 L 7.04 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 12.00 L 2.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.14 L 7.04 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 5.14 L 16.96 3.41"
      }
    ]
  ]
};

export const LabyrinthoKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0" />
      <path d="M 6.03 12.00 a 5.97 5.97 0 1 1 11.93 0 a 5.97 5.97 0 1 1 -11.93 0" />
      <path d="M 19.92 12.00 L 21.92 12.00" />
      <path d="M 15.96 18.86 L 16.96 20.59" />
      <path d="M 8.04 18.86 L 7.04 20.59" />
      <path d="M 4.08 12.00 L 2.08 12.00" />
      <path d="M 8.04 5.14 L 7.04 3.41" />
      <path d="M 15.96 5.14 L 16.96 3.41" />
      {children}
    </svg>
  );
});

export default LabyrinthoKnit;

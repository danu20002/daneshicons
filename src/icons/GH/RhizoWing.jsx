import React from 'react';

export const iconData = {
  "id": "RhizoWing",
  "name": "RhizoWing",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 12.00 a 7.93 7.93 0 1 0 15.87 0 a 7.93 7.93 0 1 0 -15.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 12.00 a 6.19 6.19 0 1 1 12.39 0 a 6.19 6.19 0 1 1 -12.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 12.00 L 21.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 17.81 L 17.88 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 10.35 19.25 L 9.90 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 15.23 L 3.50 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 8.77 L 3.50 7.91"
      }
    ],
    [
      "path",
      {
        "d": "M 10.35 4.75 L 9.90 2.80"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 6.19 L 17.88 4.62"
      }
    ]
  ]
};

export const RhizoWing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 12.00 a 7.93 7.93 0 1 0 15.87 0 a 7.93 7.93 0 1 0 -15.87 0" />
      <path d="M 5.81 12.00 a 6.19 6.19 0 1 1 12.39 0 a 6.19 6.19 0 1 1 -12.39 0" />
      <path d="M 19.43 12.00 L 21.43 12.00" />
      <path d="M 16.64 17.81 L 17.88 19.38" />
      <path d="M 10.35 19.25 L 9.90 21.20" />
      <path d="M 5.30 15.23 L 3.50 16.09" />
      <path d="M 5.30 8.77 L 3.50 7.91" />
      <path d="M 10.35 4.75 L 9.90 2.80" />
      <path d="M 16.64 6.19 L 17.88 4.62" />
      {children}
    </svg>
  );
});

export default RhizoWing;

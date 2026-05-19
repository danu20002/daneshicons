import React from 'react';

export const iconData = {
  "id": "ZeroWage",
  "name": "ZeroWage",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 12.00 a 6.17 6.17 0 1 1 12.34 0 a 6.17 6.17 0 1 1 -12.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 12.00 L 22.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 16.95 L 20.44 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.60 20.02 L 15.22 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 20.02 L 8.78 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 16.95 L 3.56 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 L 1.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 7.05 L 3.56 5.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 3.98 L 8.78 2.08"
      }
    ],
    [
      "path",
      {
        "d": "M 14.60 3.98 L 15.22 2.08"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 7.05 L 20.44 5.87"
      }
    ]
  ]
};

export const ZeroWage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.86 0 a 8.93 8.93 0 1 0 -17.86 0" />
      <path d="M 5.83 12.00 a 6.17 6.17 0 1 1 12.34 0 a 6.17 6.17 0 1 1 -12.34 0" />
      <path d="M 20.43 12.00 L 22.43 12.00" />
      <path d="M 18.82 16.95 L 20.44 18.13" />
      <path d="M 14.60 20.02 L 15.22 21.92" />
      <path d="M 9.40 20.02 L 8.78 21.92" />
      <path d="M 5.18 16.95 L 3.56 18.13" />
      <path d="M 3.57 12.00 L 1.57 12.00" />
      <path d="M 5.18 7.05 L 3.56 5.87" />
      <path d="M 9.40 3.98 L 8.78 2.08" />
      <path d="M 14.60 3.98 L 15.22 2.08" />
      <path d="M 18.82 7.05 L 20.44 5.87" />
      {children}
    </svg>
  );
});

export default ZeroWage;

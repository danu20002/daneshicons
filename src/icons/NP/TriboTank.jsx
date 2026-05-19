import React from 'react';

export const iconData = {
  "id": "TriboTank",
  "name": "TriboTank",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.61 0 a 8.81 8.81 0 1 0 -17.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 12.00 a 6.10 6.10 0 1 1 12.20 0 a 6.10 6.10 0 1 1 -12.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 12.00 L 22.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 19.19 L 17.15 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 19.19 L 6.85 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 L 1.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.81 L 6.85 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 4.81 L 17.15 3.08"
      }
    ]
  ]
};

export const TriboTank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.61 0 a 8.81 8.81 0 1 0 -17.61 0" />
      <path d="M 5.90 12.00 a 6.10 6.10 0 1 1 12.20 0 a 6.10 6.10 0 1 1 -12.20 0" />
      <path d="M 20.31 12.00 L 22.31 12.00" />
      <path d="M 16.15 19.19 L 17.15 20.92" />
      <path d="M 7.85 19.19 L 6.85 20.92" />
      <path d="M 3.69 12.00 L 1.69 12.00" />
      <path d="M 7.85 4.81 L 6.85 3.08" />
      <path d="M 16.15 4.81 L 17.15 3.08" />
      {children}
    </svg>
  );
});

export default TriboTank;

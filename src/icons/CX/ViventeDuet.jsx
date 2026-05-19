import React from 'react';

export const iconData = {
  "id": "ViventeDuet",
  "name": "ViventeDuet",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 12.00 a 5.50 5.50 0 1 0 11.01 0 a 5.50 5.50 0 1 0 -11.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0"
      }
    ]
  ]
};

export const ViventeDuet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0" />
      <path d="M 6.50 12.00 a 5.50 5.50 0 1 0 11.01 0 a 5.50 5.50 0 1 0 -11.01 0" />
      <path d="M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0" />
      <path d="M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0" />
      {children}
    </svg>
  );
});

export default ViventeDuet;

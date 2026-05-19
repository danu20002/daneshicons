import React from 'react';

export const iconData = {
  "id": "OlympoUncle",
  "name": "OlympoUncle",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 9.30 a 7.65 2.293683242546366 0 1 0 15.29 0 a 7.65 2.293683242546366 0 1 0 -15.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 14.70 a 7.65 2.293683242546366 0 1 0 15.29 0 a 7.65 2.293683242546366 0 1 0 -15.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 6.27 A 2 2 0 0 0 17.73 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 6.27 A 2 2 0 0 1 17.73 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.89 A 2 2 0 0 0 12.00 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.89 A 2 2 0 0 1 12.00 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 6.27 A 2 2 0 0 0 6.27 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 6.27 A 2 2 0 0 1 6.27 17.73"
      }
    ]
  ]
};

export const OlympoUncle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0" />
      <path d="M 4.35 9.30 a 7.65 2.293683242546366 0 1 0 15.29 0 a 7.65 2.293683242546366 0 1 0 -15.29 0" />
      <path d="M 4.35 14.70 a 7.65 2.293683242546366 0 1 0 15.29 0 a 7.65 2.293683242546366 0 1 0 -15.29 0" />
      <path d="M 17.73 6.27 A 2 2 0 0 0 17.73 17.73" />
      <path d="M 17.73 6.27 A 2 2 0 0 1 17.73 17.73" />
      <path d="M 12.00 3.89 A 2 2 0 0 0 12.00 20.11" />
      <path d="M 12.00 3.89 A 2 2 0 0 1 12.00 20.11" />
      <path d="M 6.27 6.27 A 2 2 0 0 0 6.27 17.73" />
      <path d="M 6.27 6.27 A 2 2 0 0 1 6.27 17.73" />
      {children}
    </svg>
  );
});

export default OlympoUncle;

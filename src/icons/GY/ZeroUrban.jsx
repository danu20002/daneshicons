import React from 'react';

export const iconData = {
  "id": "ZeroUrban",
  "name": "ZeroUrban",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 7.99 a 6.95 2.0842504593691293 0 1 0 13.90 0 a 6.95 2.0842504593691293 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 2.406685127550736 0 1 0 16.04 0 a 8.02 2.406685127550736 0 1 0 -16.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 16.01 a 6.95 2.0842504593691293 0 1 0 13.90 0 a 6.95 2.0842504593691293 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 5.05 A 2 2 0 0 0 16.01 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 5.05 A 2 2 0 0 1 16.01 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 5.05 A 2 2 0 0 0 7.99 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 5.05 A 2 2 0 0 1 7.99 18.95"
      }
    ]
  ]
};

export const ZeroUrban = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0" />
      <path d="M 5.05 7.99 a 6.95 2.0842504593691293 0 1 0 13.90 0 a 6.95 2.0842504593691293 0 1 0 -13.90 0" />
      <path d="M 3.98 12.00 a 8.02 2.406685127550736 0 1 0 16.04 0 a 8.02 2.406685127550736 0 1 0 -16.04 0" />
      <path d="M 5.05 16.01 a 6.95 2.0842504593691293 0 1 0 13.90 0 a 6.95 2.0842504593691293 0 1 0 -13.90 0" />
      <path d="M 16.01 5.05 A 2 2 0 0 0 16.01 18.95" />
      <path d="M 16.01 5.05 A 2 2 0 0 1 16.01 18.95" />
      <path d="M 7.99 5.05 A 2 2 0 0 0 7.99 18.95" />
      <path d="M 7.99 5.05 A 2 2 0 0 1 7.99 18.95" />
      {children}
    </svg>
  );
});

export default ZeroUrban;

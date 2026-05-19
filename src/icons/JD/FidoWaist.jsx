import React from 'react';

export const iconData = {
  "id": "FidoWaist",
  "name": "FidoWaist",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.98 0 a 8.99 8.99 0 1 0 -17.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 9.00 a 8.47 2.542207146314558 0 1 0 16.95 0 a 8.47 2.542207146314558 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 15.00 a 8.47 2.542207146314558 0 1 0 16.95 0 a 8.47 2.542207146314558 0 1 0 -16.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 4.22 A 2 2 0 0 0 16.49 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 4.22 A 2 2 0 0 1 16.49 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 4.22 A 2 2 0 0 0 7.51 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 4.22 A 2 2 0 0 1 7.51 19.78"
      }
    ]
  ]
};

export const FidoWaist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.98 0 a 8.99 8.99 0 1 0 -17.98 0" />
      <path d="M 3.53 9.00 a 8.47 2.542207146314558 0 1 0 16.95 0 a 8.47 2.542207146314558 0 1 0 -16.95 0" />
      <path d="M 3.53 15.00 a 8.47 2.542207146314558 0 1 0 16.95 0 a 8.47 2.542207146314558 0 1 0 -16.95 0" />
      <path d="M 16.49 4.22 A 2 2 0 0 0 16.49 19.78" />
      <path d="M 16.49 4.22 A 2 2 0 0 1 16.49 19.78" />
      <path d="M 7.51 4.22 A 2 2 0 0 0 7.51 19.78" />
      <path d="M 7.51 4.22 A 2 2 0 0 1 7.51 19.78" />
      {children}
    </svg>
  );
});

export default FidoWaist;

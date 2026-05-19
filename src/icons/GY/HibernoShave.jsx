import React from 'react';

export const iconData = {
  "id": "HibernoShave",
  "name": "HibernoShave",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 8.74 a 9.23 2.7677816470778613 0 1 0 18.45 0 a 9.23 2.7677816470778613 0 1 0 -18.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 15.26 a 9.23 2.7677816470778613 0 1 0 18.45 0 a 9.23 2.7677816470778613 0 1 0 -18.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 0 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 1 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 0 12.00 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 1 12.00 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 0 5.08 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 1 5.08 18.92"
      }
    ]
  ]
};

export const HibernoShave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0" />
      <path d="M 2.77 8.74 a 9.23 2.7677816470778613 0 1 0 18.45 0 a 9.23 2.7677816470778613 0 1 0 -18.45 0" />
      <path d="M 2.77 15.26 a 9.23 2.7677816470778613 0 1 0 18.45 0 a 9.23 2.7677816470778613 0 1 0 -18.45 0" />
      <path d="M 18.92 5.08 A 2 2 0 0 0 18.92 18.92" />
      <path d="M 18.92 5.08 A 2 2 0 0 1 18.92 18.92" />
      <path d="M 12.00 2.21 A 2 2 0 0 0 12.00 21.79" />
      <path d="M 12.00 2.21 A 2 2 0 0 1 12.00 21.79" />
      <path d="M 5.08 5.08 A 2 2 0 0 0 5.08 18.92" />
      <path d="M 5.08 5.08 A 2 2 0 0 1 5.08 18.92" />
      {children}
    </svg>
  );
});

export default HibernoShave;

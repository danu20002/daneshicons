import React from 'react';

export const iconData = {
  "id": "TimbroColony",
  "name": "TimbroColony",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.96 0 a 8.48 8.48 0 1 0 -16.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 6.91 a 6.78 2.034952100738883 0 1 0 13.57 0 a 6.78 2.034952100738883 0 1 0 -13.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 10.30 a 8.31 2.4922971489074874 0 1 0 16.62 0 a 8.31 2.4922971489074874 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 13.70 a 8.31 2.4922971489074874 0 1 0 16.62 0 a 8.31 2.4922971489074874 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 17.09 a 6.78 2.034952100738883 0 1 0 13.57 0 a 6.78 2.034952100738883 0 1 0 -13.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 4.66 A 2 2 0 0 0 16.24 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 4.66 A 2 2 0 0 1 16.24 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 4.66 A 2 2 0 0 0 7.76 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 4.66 A 2 2 0 0 1 7.76 19.34"
      }
    ]
  ]
};

export const TimbroColony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.96 0 a 8.48 8.48 0 1 0 -16.96 0" />
      <path d="M 5.22 6.91 a 6.78 2.034952100738883 0 1 0 13.57 0 a 6.78 2.034952100738883 0 1 0 -13.57 0" />
      <path d="M 3.69 10.30 a 8.31 2.4922971489074874 0 1 0 16.62 0 a 8.31 2.4922971489074874 0 1 0 -16.62 0" />
      <path d="M 3.69 13.70 a 8.31 2.4922971489074874 0 1 0 16.62 0 a 8.31 2.4922971489074874 0 1 0 -16.62 0" />
      <path d="M 5.22 17.09 a 6.78 2.034952100738883 0 1 0 13.57 0 a 6.78 2.034952100738883 0 1 0 -13.57 0" />
      <path d="M 16.24 4.66 A 2 2 0 0 0 16.24 19.34" />
      <path d="M 16.24 4.66 A 2 2 0 0 1 16.24 19.34" />
      <path d="M 7.76 4.66 A 2 2 0 0 0 7.76 19.34" />
      <path d="M 7.76 4.66 A 2 2 0 0 1 7.76 19.34" />
      {children}
    </svg>
  );
});

export default TimbroColony;

import React from 'react';

export const iconData = {
  "id": "TutelaHate",
  "name": "TutelaHate",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 9.82 0 1 0 19.65 0 a 9.82 9.82 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 8.73 a 9.26 2.7786183669270215 0 1 0 18.52 0 a 9.26 2.7786183669270215 0 1 0 -18.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 15.27 a 9.26 2.7786183669270215 0 1 0 18.52 0 a 9.26 2.7786183669270215 0 1 0 -18.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 5.05 A 2 2 0 0 0 18.95 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 5.05 A 2 2 0 0 1 18.95 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.18 A 2 2 0 0 0 12.00 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.18 A 2 2 0 0 1 12.00 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 5.05 A 2 2 0 0 0 5.05 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 5.05 A 2 2 0 0 1 5.05 18.95"
      }
    ]
  ]
};

export const TutelaHate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 12.00 a 9.82 9.82 0 1 0 19.65 0 a 9.82 9.82 0 1 0 -19.65 0" />
      <path d="M 2.74 8.73 a 9.26 2.7786183669270215 0 1 0 18.52 0 a 9.26 2.7786183669270215 0 1 0 -18.52 0" />
      <path d="M 2.74 15.27 a 9.26 2.7786183669270215 0 1 0 18.52 0 a 9.26 2.7786183669270215 0 1 0 -18.52 0" />
      <path d="M 18.95 5.05 A 2 2 0 0 0 18.95 18.95" />
      <path d="M 18.95 5.05 A 2 2 0 0 1 18.95 18.95" />
      <path d="M 12.00 2.18 A 2 2 0 0 0 12.00 21.82" />
      <path d="M 12.00 2.18 A 2 2 0 0 1 12.00 21.82" />
      <path d="M 5.05 5.05 A 2 2 0 0 0 5.05 18.95" />
      <path d="M 5.05 5.05 A 2 2 0 0 1 5.05 18.95" />
      {children}
    </svg>
  );
});

export default TutelaHate;

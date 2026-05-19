import React from 'react';

export const iconData = {
  "id": "TendoHarp",
  "name": "TendoHarp",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 9.15 a 8.05 2.4156501061023383 0 1 0 16.10 0 a 8.05 2.4156501061023383 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 14.85 a 8.05 2.4156501061023383 0 1 0 16.10 0 a 8.05 2.4156501061023383 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 5.96 A 2 2 0 0 0 18.04 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 5.96 A 2 2 0 0 1 18.04 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.46 A 2 2 0 0 0 12.00 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.46 A 2 2 0 0 1 12.00 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 5.96 A 2 2 0 0 0 5.96 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 5.96 A 2 2 0 0 1 5.96 18.04"
      }
    ]
  ]
};

export const TendoHarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0" />
      <path d="M 3.95 9.15 a 8.05 2.4156501061023383 0 1 0 16.10 0 a 8.05 2.4156501061023383 0 1 0 -16.10 0" />
      <path d="M 3.95 14.85 a 8.05 2.4156501061023383 0 1 0 16.10 0 a 8.05 2.4156501061023383 0 1 0 -16.10 0" />
      <path d="M 18.04 5.96 A 2 2 0 0 0 18.04 18.04" />
      <path d="M 18.04 5.96 A 2 2 0 0 1 18.04 18.04" />
      <path d="M 12.00 3.46 A 2 2 0 0 0 12.00 20.54" />
      <path d="M 12.00 3.46 A 2 2 0 0 1 12.00 20.54" />
      <path d="M 5.96 5.96 A 2 2 0 0 0 5.96 18.04" />
      <path d="M 5.96 5.96 A 2 2 0 0 1 5.96 18.04" />
      {children}
    </svg>
  );
});

export default TendoHarp;

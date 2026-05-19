import React from 'react';

export const iconData = {
  "id": "SpiriPower",
  "name": "SpiriPower",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.66 0 a 9.83 9.83 0 1 0 -19.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 8.72 a 9.27 2.780858390397565 0 1 0 18.54 0 a 9.27 2.780858390397565 0 1 0 -18.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 15.28 a 9.27 2.7808583903975657 0 1 0 18.54 0 a 9.27 2.7808583903975657 0 1 0 -18.54 0"
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
        "d": "M 12.00 2.17 A 2 2 0 0 0 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 1 12.00 21.83"
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

export const SpiriPower = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.66 0 a 9.83 9.83 0 1 0 -19.66 0" />
      <path d="M 2.73 8.72 a 9.27 2.780858390397565 0 1 0 18.54 0 a 9.27 2.780858390397565 0 1 0 -18.54 0" />
      <path d="M 2.73 15.28 a 9.27 2.7808583903975657 0 1 0 18.54 0 a 9.27 2.7808583903975657 0 1 0 -18.54 0" />
      <path d="M 18.95 5.05 A 2 2 0 0 0 18.95 18.95" />
      <path d="M 18.95 5.05 A 2 2 0 0 1 18.95 18.95" />
      <path d="M 12.00 2.17 A 2 2 0 0 0 12.00 21.83" />
      <path d="M 12.00 2.17 A 2 2 0 0 1 12.00 21.83" />
      <path d="M 5.05 5.05 A 2 2 0 0 0 5.05 18.95" />
      <path d="M 5.05 5.05 A 2 2 0 0 1 5.05 18.95" />
      {children}
    </svg>
  );
});

export default SpiriPower;

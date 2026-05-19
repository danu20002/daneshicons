import React from 'react';

export const iconData = {
  "id": "MechaUnder",
  "name": "MechaUnder",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 12.00 a 6.49 6.49 0 1 1 12.98 0 a 6.49 6.49 0 1 1 -12.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 12.00 L 21.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 17.87 L 17.93 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 19.32 L 9.88 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 15.26 L 3.43 16.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 8.74 L 3.43 7.87"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 4.68 L 9.88 2.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 6.13 L 17.93 4.56"
      }
    ]
  ]
};

export const MechaUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0" />
      <path d="M 5.51 12.00 a 6.49 6.49 0 1 1 12.98 0 a 6.49 6.49 0 1 1 -12.98 0" />
      <path d="M 19.51 12.00 L 21.51 12.00" />
      <path d="M 16.68 17.87 L 17.93 19.44" />
      <path d="M 10.33 19.32 L 9.88 21.27" />
      <path d="M 5.23 15.26 L 3.43 16.13" />
      <path d="M 5.23 8.74 L 3.43 7.87" />
      <path d="M 10.33 4.68 L 9.88 2.73" />
      <path d="M 16.68 6.13 L 17.93 4.56" />
      {children}
    </svg>
  );
});

export default MechaUnder;

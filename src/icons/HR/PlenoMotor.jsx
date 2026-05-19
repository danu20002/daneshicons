import React from 'react';

export const iconData = {
  "id": "PlenoMotor",
  "name": "PlenoMotor",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 7.52 a 7.77 2.3303325058378275 0 1 0 15.54 0 a 7.77 2.3303325058378275 0 1 0 -15.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 12.00 a 8.97 2.69083619909361 0 1 0 17.94 0 a 8.97 2.69083619909361 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 16.48 a 7.77 2.3303325058378275 0 1 0 15.54 0 a 7.77 2.3303325058378275 0 1 0 -15.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 4.23 A 2 2 0 0 0 16.48 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 4.23 A 2 2 0 0 1 16.48 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.23 A 2 2 0 0 0 7.52 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 4.23 A 2 2 0 0 1 7.52 19.77"
      }
    ]
  ]
};

export const PlenoMotor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0" />
      <path d="M 4.23 7.52 a 7.77 2.3303325058378275 0 1 0 15.54 0 a 7.77 2.3303325058378275 0 1 0 -15.54 0" />
      <path d="M 3.03 12.00 a 8.97 2.69083619909361 0 1 0 17.94 0 a 8.97 2.69083619909361 0 1 0 -17.94 0" />
      <path d="M 4.23 16.48 a 7.77 2.3303325058378275 0 1 0 15.54 0 a 7.77 2.3303325058378275 0 1 0 -15.54 0" />
      <path d="M 16.48 4.23 A 2 2 0 0 0 16.48 19.77" />
      <path d="M 16.48 4.23 A 2 2 0 0 1 16.48 19.77" />
      <path d="M 7.52 4.23 A 2 2 0 0 0 7.52 19.77" />
      <path d="M 7.52 4.23 A 2 2 0 0 1 7.52 19.77" />
      {children}
    </svg>
  );
});

export default PlenoMotor;

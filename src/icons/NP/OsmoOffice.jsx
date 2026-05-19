import React from 'react';

export const iconData = {
  "id": "OsmoOffice",
  "name": "OsmoOffice",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 12.00 a 6.52 6.52 0 1 1 13.04 0 a 6.52 6.52 0 1 1 -13.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 12.00 L 21.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 17.93 L 17.97 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.31 19.39 L 9.87 21.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 15.29 L 3.37 16.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 8.71 L 3.37 7.84"
      }
    ],
    [
      "path",
      {
        "d": "M 10.31 4.61 L 9.87 2.66"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 6.07 L 17.97 4.51"
      }
    ]
  ]
};

export const OsmoOffice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0" />
      <path d="M 5.48 12.00 a 6.52 6.52 0 1 1 13.04 0 a 6.52 6.52 0 1 1 -13.04 0" />
      <path d="M 19.58 12.00 L 21.58 12.00" />
      <path d="M 16.73 17.93 L 17.97 19.49" />
      <path d="M 10.31 19.39 L 9.87 21.34" />
      <path d="M 5.17 15.29 L 3.37 16.16" />
      <path d="M 5.17 8.71 L 3.37 7.84" />
      <path d="M 10.31 4.61 L 9.87 2.66" />
      <path d="M 16.73 6.07 L 17.97 4.51" />
      {children}
    </svg>
  );
});

export default OsmoOffice;

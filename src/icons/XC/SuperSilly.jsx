import React from 'react';

export const iconData = {
  "id": "SuperSilly",
  "name": "SuperSilly",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 12.00 L 22.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 18.44 L 18.38 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 20.03 L 9.72 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 15.57 L 2.78 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 8.43 L 2.78 7.56"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 3.97 L 9.72 2.02"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 5.56 L 18.38 4.00"
      }
    ]
  ]
};

export const SuperSilly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 12.00 a 8.74 8.74 0 1 0 17.47 0 a 8.74 8.74 0 1 0 -17.47 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0" />
      <path d="M 20.24 12.00 L 22.24 12.00" />
      <path d="M 17.14 18.44 L 18.38 20.00" />
      <path d="M 10.17 20.03 L 9.72 21.98" />
      <path d="M 4.58 15.57 L 2.78 16.44" />
      <path d="M 4.58 8.43 L 2.78 7.56" />
      <path d="M 10.17 3.97 L 9.72 2.02" />
      <path d="M 17.14 5.56 L 18.38 4.00" />
      {children}
    </svg>
  );
});

export default SuperSilly;

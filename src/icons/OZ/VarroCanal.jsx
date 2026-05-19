import React from 'react';

export const iconData = {
  "id": "VarroCanal",
  "name": "VarroCanal",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.69 12.00 a 9.31 9.31 0 1 0 18.62 0 a 9.31 9.31 0 1 0 -18.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 7.35 a 8.06 2.4187517444649025 0 1 0 16.13 0 a 8.06 2.4187517444649025 0 1 0 -16.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 12.00 a 9.31 2.792933941539377 0 1 0 18.62 0 a 9.31 2.792933941539377 0 1 0 -18.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 16.65 a 8.06 2.4187517444649025 0 1 0 16.13 0 a 8.06 2.4187517444649025 0 1 0 -16.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 5.42 A 2 2 0 0 0 18.58 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 5.42 A 2 2 0 0 1 18.58 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.69 A 2 2 0 0 0 12.00 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.69 A 2 2 0 0 1 12.00 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 5.42 A 2 2 0 0 0 5.42 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 5.42 A 2 2 0 0 1 5.42 18.58"
      }
    ]
  ]
};

export const VarroCanal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.69 12.00 a 9.31 9.31 0 1 0 18.62 0 a 9.31 9.31 0 1 0 -18.62 0" />
      <path d="M 3.94 7.35 a 8.06 2.4187517444649025 0 1 0 16.13 0 a 8.06 2.4187517444649025 0 1 0 -16.13 0" />
      <path d="M 2.69 12.00 a 9.31 2.792933941539377 0 1 0 18.62 0 a 9.31 2.792933941539377 0 1 0 -18.62 0" />
      <path d="M 3.94 16.65 a 8.06 2.4187517444649025 0 1 0 16.13 0 a 8.06 2.4187517444649025 0 1 0 -16.13 0" />
      <path d="M 18.58 5.42 A 2 2 0 0 0 18.58 18.58" />
      <path d="M 18.58 5.42 A 2 2 0 0 1 18.58 18.58" />
      <path d="M 12.00 2.69 A 2 2 0 0 0 12.00 21.31" />
      <path d="M 12.00 2.69 A 2 2 0 0 1 12.00 21.31" />
      <path d="M 5.42 5.42 A 2 2 0 0 0 5.42 18.58" />
      <path d="M 5.42 5.42 A 2 2 0 0 1 5.42 18.58" />
      {children}
    </svg>
  );
});

export default VarroCanal;

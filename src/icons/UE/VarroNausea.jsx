import React from 'react';

export const iconData = {
  "id": "VarroNausea",
  "name": "VarroNausea",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.10 12.00 a 8.90 8.90 0 1 0 17.80 0 a 8.90 8.90 0 1 0 -17.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.40 12.00 L 22.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 18.57 L 18.49 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 20.19 L 9.69 22.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 15.65 L 2.63 16.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 8.35 L 2.63 7.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 3.81 L 9.69 1.86"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 5.43 L 18.49 3.87"
      }
    ]
  ]
};

export const VarroNausea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.10 12.00 a 8.90 8.90 0 1 0 17.80 0 a 8.90 8.90 0 1 0 -17.80 0" />
      <path d="M 6.06 12.00 a 5.94 5.94 0 1 1 11.88 0 a 5.94 5.94 0 1 1 -11.88 0" />
      <path d="M 20.40 12.00 L 22.40 12.00" />
      <path d="M 17.24 18.57 L 18.49 20.13" />
      <path d="M 10.13 20.19 L 9.69 22.14" />
      <path d="M 4.43 15.65 L 2.63 16.51" />
      <path d="M 4.43 8.35 L 2.63 7.49" />
      <path d="M 10.13 3.81 L 9.69 1.86" />
      <path d="M 17.24 5.43 L 18.49 3.87" />
      {children}
    </svg>
  );
});

export default VarroNausea;

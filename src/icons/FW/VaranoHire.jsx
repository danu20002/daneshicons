import React from 'react';

export const iconData = {
  "id": "VaranoHire",
  "name": "VaranoHire",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.91 5.73 C 10.82 9.11, 6.36 12.60, 18.24 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 5.51 C 10.16 11.95, 10.92 14.20, 18.00 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 8.84 6.60 C 15.79 14.56, 10.37 17.41, 16.26 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 3.08 C 9.26 4.93, 10.97 5.78, 14.20 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 9.24 C 16.74 7.44, 14.82 13.43, 17.85 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 4.74 C 8.83 6.44, 15.59 15.50, 15.52 16.23"
      }
    ]
  ]
};

export const VaranoHire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.91 5.73 C 10.82 9.11, 6.36 12.60, 18.24 18.33" />
      <path d="M 8.46 5.51 C 10.16 11.95, 10.92 14.20, 18.00 19.07" />
      <path d="M 8.84 6.60 C 15.79 14.56, 10.37 17.41, 16.26 20.95" />
      <path d="M 6.82 3.08 C 9.26 4.93, 10.97 5.78, 14.20 21.84" />
      <path d="M 6.72 9.24 C 16.74 7.44, 14.82 13.43, 17.85 17.67" />
      <path d="M 9.44 4.74 C 8.83 6.44, 15.59 15.50, 15.52 16.23" />
      {children}
    </svg>
  );
});

export default VaranoHire;

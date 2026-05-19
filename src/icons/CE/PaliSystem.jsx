import React from 'react';

export const iconData = {
  "id": "PaliSystem",
  "name": "PaliSystem",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 12.00 a 5.24 5.24 0 1 0 10.48 0 a 5.24 5.24 0 1 0 -10.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 12.00 a 6.90 6.90 0 1 0 13.80 0 a 6.90 6.90 0 1 0 -13.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0"
      }
    ]
  ]
};

export const PaliSystem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0" />
      <path d="M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0" />
      <path d="M 6.76 12.00 a 5.24 5.24 0 1 0 10.48 0 a 5.24 5.24 0 1 0 -10.48 0" />
      <path d="M 5.10 12.00 a 6.90 6.90 0 1 0 13.80 0 a 6.90 6.90 0 1 0 -13.80 0" />
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0" />
      {children}
    </svg>
  );
});

export default PaliSystem;

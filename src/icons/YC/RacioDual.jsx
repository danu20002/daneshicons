import React from 'react';

export const iconData = {
  "id": "RacioDual",
  "name": "RacioDual",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 12.00 a 4.08 4.08 0 1 0 8.17 0 a 4.08 4.08 0 1 0 -8.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 12.00 a 8.51 8.51 0 1 0 17.03 0 a 8.51 8.51 0 1 0 -17.03 0"
      }
    ]
  ]
};

export const RacioDual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0" />
      <path d="M 7.92 12.00 a 4.08 4.08 0 1 0 8.17 0 a 4.08 4.08 0 1 0 -8.17 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0" />
      <path d="M 3.49 12.00 a 8.51 8.51 0 1 0 17.03 0 a 8.51 8.51 0 1 0 -17.03 0" />
      {children}
    </svg>
  );
});

export default RacioDual;

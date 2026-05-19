import React from 'react';

export const iconData = {
  "id": "NectoVariable",
  "name": "NectoVariable",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 12.00 a 3.75 3.75 0 1 0 7.51 0 a 3.75 3.75 0 1 0 -7.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.13 0 a 8.56 8.56 0 1 0 -17.13 0"
      }
    ]
  ]
};

export const NectoVariable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0" stroke-dasharray="6 1" />
      <path d="M 8.25 12.00 a 3.75 3.75 0 1 0 7.51 0 a 3.75 3.75 0 1 0 -7.51 0" />
      <path d="M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0" />
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.13 0 a 8.56 8.56 0 1 0 -17.13 0" />
      {children}
    </svg>
  );
});

export default NectoVariable;

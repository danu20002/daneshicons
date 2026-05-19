import React from 'react';

export const iconData = {
  "id": "TritoMourn",
  "name": "TritoMourn",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 12.00 a 9.61 9.61 0 1 0 19.22 0 a 9.61 9.61 0 1 0 -19.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 7.20 a 8.32 2.496154800198102 0 1 0 16.64 0 a 8.32 2.496154800198102 0 1 0 -16.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 12.00 a 9.61 2.8823112916667015 0 1 0 19.22 0 a 9.61 2.8823112916667015 0 1 0 -19.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 16.80 a 8.32 2.496154800198102 0 1 0 16.64 0 a 8.32 2.496154800198102 0 1 0 -16.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 3.68 A 2 2 0 0 0 16.80 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 3.68 A 2 2 0 0 1 16.80 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 3.68 A 2 2 0 0 0 7.20 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 3.68 A 2 2 0 0 1 7.20 20.32"
      }
    ]
  ]
};

export const TritoMourn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 12.00 a 9.61 9.61 0 1 0 19.22 0 a 9.61 9.61 0 1 0 -19.22 0" />
      <path d="M 3.68 7.20 a 8.32 2.496154800198102 0 1 0 16.64 0 a 8.32 2.496154800198102 0 1 0 -16.64 0" />
      <path d="M 2.39 12.00 a 9.61 2.8823112916667015 0 1 0 19.22 0 a 9.61 2.8823112916667015 0 1 0 -19.22 0" />
      <path d="M 3.68 16.80 a 8.32 2.496154800198102 0 1 0 16.64 0 a 8.32 2.496154800198102 0 1 0 -16.64 0" />
      <path d="M 16.80 3.68 A 2 2 0 0 0 16.80 20.32" />
      <path d="M 16.80 3.68 A 2 2 0 0 1 16.80 20.32" />
      <path d="M 7.20 3.68 A 2 2 0 0 0 7.20 20.32" />
      <path d="M 7.20 3.68 A 2 2 0 0 1 7.20 20.32" />
      {children}
    </svg>
  );
});

export default TritoMourn;

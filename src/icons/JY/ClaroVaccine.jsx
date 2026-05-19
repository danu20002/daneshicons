import React from 'react';

export const iconData = {
  "id": "ClaroVaccine",
  "name": "ClaroVaccine",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.27 0 a 8.14 8.14 0 1 0 -16.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 12.00 a 5.23 5.23 0 1 1 10.46 0 a 5.23 5.23 0 1 1 -10.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 12.00 L 21.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 16.49 L 19.80 17.66"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 19.26 L 14.98 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 19.26 L 9.02 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 16.49 L 4.20 17.66"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 12.00 L 2.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 7.51 L 4.20 6.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 4.74 L 9.02 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 4.74 L 14.98 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 7.51 L 19.80 6.34"
      }
    ]
  ]
};

export const ClaroVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.27 0 a 8.14 8.14 0 1 0 -16.27 0" />
      <path d="M 6.77 12.00 a 5.23 5.23 0 1 1 10.46 0 a 5.23 5.23 0 1 1 -10.46 0" />
      <path d="M 19.64 12.00 L 21.64 12.00" />
      <path d="M 18.18 16.49 L 19.80 17.66" />
      <path d="M 14.36 19.26 L 14.98 21.17" />
      <path d="M 9.64 19.26 L 9.02 21.17" />
      <path d="M 5.82 16.49 L 4.20 17.66" />
      <path d="M 4.36 12.00 L 2.36 12.00" />
      <path d="M 5.82 7.51 L 4.20 6.34" />
      <path d="M 9.64 4.74 L 9.02 2.83" />
      <path d="M 14.36 4.74 L 14.98 2.83" />
      <path d="M 18.18 7.51 L 19.80 6.34" />
      {children}
    </svg>
  );
});

export default ClaroVaccine;

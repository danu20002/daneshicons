import React from 'react';

export const iconData = {
  "id": "TardigradoNear",
  "name": "TardigradoNear",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.86 12.00 L 21.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 18.14 L 18.14 19.71"
      }
    ],
    [
      "path",
      {
        "d": "M 10.25 19.66 L 9.81 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 15.41 L 3.12 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 8.59 L 3.12 7.72"
      }
    ],
    [
      "path",
      {
        "d": "M 10.25 4.34 L 9.81 2.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 5.86 L 18.14 4.29"
      }
    ]
  ]
};

export const TardigradoNear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 12.00 a 8.36 8.36 0 1 0 16.71 0 a 8.36 8.36 0 1 0 -16.71 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0" />
      <path d="M 19.86 12.00 L 21.86 12.00" />
      <path d="M 16.90 18.14 L 18.14 19.71" />
      <path d="M 10.25 19.66 L 9.81 21.61" />
      <path d="M 4.92 15.41 L 3.12 16.28" />
      <path d="M 4.92 8.59 L 3.12 7.72" />
      <path d="M 10.25 4.34 L 9.81 2.39" />
      <path d="M 16.90 5.86 L 18.14 4.29" />
      {children}
    </svg>
  );
});

export default TardigradoNear;

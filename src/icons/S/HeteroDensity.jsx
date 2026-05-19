import React from 'react';

export const iconData = {
  "id": "HeteroDensity",
  "name": "HeteroDensity",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 12.00 a 6.87 6.87 0 1 1 13.74 0 a 6.87 6.87 0 1 1 -13.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 12.00 L 22.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 16.48 L 20.65 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 19.53 L 16.27 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 20.20 L 10.54 22.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 18.26 L 5.27 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 14.33 L 2.14 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 9.67 L 2.14 9.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 5.74 L 5.27 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 3.80 L 10.54 1.83"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 4.47 L 16.27 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 7.52 L 20.65 6.44"
      }
    ]
  ]
};

export const HeteroDensity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      <path d="M 5.13 12.00 a 6.87 6.87 0 1 1 13.74 0 a 6.87 6.87 0 1 1 -13.74 0" />
      <path d="M 20.28 12.00 L 22.28 12.00" />
      <path d="M 18.96 16.48 L 20.65 17.56" />
      <path d="M 15.44 19.53 L 16.27 21.35" />
      <path d="M 10.82 20.20 L 10.54 22.17" />
      <path d="M 6.58 18.26 L 5.27 19.77" />
      <path d="M 4.06 14.33 L 2.14 14.90" />
      <path d="M 4.06 9.67 L 2.14 9.10" />
      <path d="M 6.58 5.74 L 5.27 4.23" />
      <path d="M 10.82 3.80 L 10.54 1.83" />
      <path d="M 15.44 4.47 L 16.27 2.65" />
      <path d="M 18.96 7.52 L 20.65 6.44" />
      {children}
    </svg>
  );
});

export default HeteroDensity;

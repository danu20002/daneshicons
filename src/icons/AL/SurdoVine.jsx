import React from 'react';

export const iconData = {
  "id": "SurdoVine",
  "name": "SurdoVine",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 12.00 a 6.06 6.06 0 1 1 12.11 0 a 6.06 6.06 0 1 1 -12.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 12.00 L 21.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.53 16.19 L 20.21 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.22 19.06 L 16.05 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 19.68 L 10.61 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 17.86 L 5.61 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 14.19 L 2.64 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 9.81 L 2.64 9.25"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 6.14 L 5.61 4.63"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 4.32 L 10.61 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 15.22 4.94 L 16.05 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 18.53 7.81 L 20.21 6.73"
      }
    ]
  ]
};

export const SurdoVine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0" />
      <path d="M 5.94 12.00 a 6.06 6.06 0 1 1 12.11 0 a 6.06 6.06 0 1 1 -12.11 0" />
      <path d="M 19.76 12.00 L 21.76 12.00" />
      <path d="M 18.53 16.19 L 20.21 17.27" />
      <path d="M 15.22 19.06 L 16.05 20.87" />
      <path d="M 10.90 19.68 L 10.61 21.66" />
      <path d="M 6.92 17.86 L 5.61 19.37" />
      <path d="M 4.56 14.19 L 2.64 14.75" />
      <path d="M 4.56 9.81 L 2.64 9.25" />
      <path d="M 6.92 6.14 L 5.61 4.63" />
      <path d="M 10.90 4.32 L 10.61 2.34" />
      <path d="M 15.22 4.94 L 16.05 3.13" />
      <path d="M 18.53 7.81 L 20.21 6.73" />
      {children}
    </svg>
  );
});

export default SurdoVine;

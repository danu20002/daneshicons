import React from 'react';

export const iconData = {
  "id": "DuraTerm",
  "name": "DuraTerm",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.37 0 a 8.19 8.19 0 1 0 -16.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 12.00 a 5.29 5.29 0 1 1 10.58 0 a 5.29 5.29 0 1 1 -10.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.69 12.00 L 21.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 16.16 L 20.15 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 15.19 18.99 L 16.02 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 10.91 19.61 L 10.62 21.59"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 17.81 L 5.66 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 14.17 L 2.71 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 9.83 L 2.71 9.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 6.19 L 5.66 4.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.91 4.39 L 10.62 2.41"
      }
    ],
    [
      "path",
      {
        "d": "M 15.19 5.01 L 16.02 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 7.84 L 20.15 6.76"
      }
    ]
  ]
};

export const DuraTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.37 0 a 8.19 8.19 0 1 0 -16.37 0" />
      <path d="M 6.71 12.00 a 5.29 5.29 0 1 1 10.58 0 a 5.29 5.29 0 1 1 -10.58 0" />
      <path d="M 19.69 12.00 L 21.69 12.00" />
      <path d="M 18.47 16.16 L 20.15 17.24" />
      <path d="M 15.19 18.99 L 16.02 20.81" />
      <path d="M 10.91 19.61 L 10.62 21.59" />
      <path d="M 6.97 17.81 L 5.66 19.32" />
      <path d="M 4.63 14.17 L 2.71 14.73" />
      <path d="M 4.63 9.83 L 2.71 9.27" />
      <path d="M 6.97 6.19 L 5.66 4.68" />
      <path d="M 10.91 4.39 L 10.62 2.41" />
      <path d="M 15.19 5.01 L 16.02 3.19" />
      <path d="M 18.47 7.84 L 20.15 6.76" />
      {children}
    </svg>
  );
});

export default DuraTerm;

import React from 'react';

export const iconData = {
  "id": "SucroSling",
  "name": "SucroSling",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.25 0 a 8.13 8.13 0 1 0 -16.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 12.00 a 5.92 5.92 0 1 1 11.84 0 a 5.92 5.92 0 1 1 -11.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.63 12.00 L 21.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.81 18.61 L 16.81 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 18.61 L 7.19 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 12.00 L 2.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 5.39 L 7.19 3.66"
      }
    ],
    [
      "path",
      {
        "d": "M 15.81 5.39 L 16.81 3.66"
      }
    ]
  ]
};

export const SucroSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.25 0 a 8.13 8.13 0 1 0 -16.25 0" />
      <path d="M 6.08 12.00 a 5.92 5.92 0 1 1 11.84 0 a 5.92 5.92 0 1 1 -11.84 0" />
      <path d="M 19.63 12.00 L 21.63 12.00" />
      <path d="M 15.81 18.61 L 16.81 20.34" />
      <path d="M 8.19 18.61 L 7.19 20.34" />
      <path d="M 4.37 12.00 L 2.37 12.00" />
      <path d="M 8.19 5.39 L 7.19 3.66" />
      <path d="M 15.81 5.39 L 16.81 3.66" />
      {children}
    </svg>
  );
});

export default SucroSling;

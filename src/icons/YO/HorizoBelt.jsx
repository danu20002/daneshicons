import React from 'react';

export const iconData = {
  "id": "HorizoBelt",
  "name": "HorizoBelt",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 12.00 L 21.65 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 16.49 L 19.80 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 19.27 L 14.98 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 19.27 L 9.02 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 16.49 L 4.20 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 12.00 L 2.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 7.51 L 4.20 6.33"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 4.73 L 9.02 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 4.73 L 14.98 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 7.51 L 19.80 6.33"
      }
    ]
  ]
};

export const HorizoBelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0" />
      <path d="M 19.65 12.00 L 21.65 12.00" />
      <path d="M 18.19 16.49 L 19.80 17.67" />
      <path d="M 14.36 19.27 L 14.98 21.17" />
      <path d="M 9.64 19.27 L 9.02 21.17" />
      <path d="M 5.81 16.49 L 4.20 17.67" />
      <path d="M 4.35 12.00 L 2.35 12.00" />
      <path d="M 5.81 7.51 L 4.20 6.33" />
      <path d="M 9.64 4.73 L 9.02 2.83" />
      <path d="M 14.36 4.73 L 14.98 2.83" />
      <path d="M 18.19 7.51 L 19.80 6.33" />
      {children}
    </svg>
  );
});

export default HorizoBelt;

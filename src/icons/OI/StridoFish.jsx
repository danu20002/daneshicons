import React from 'react';

export const iconData = {
  "id": "StridoFish",
  "name": "StridoFish",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 12.00 a 6.31 6.31 0 1 1 12.63 0 a 6.31 6.31 0 1 1 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 12.00 L 21.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 17.88 L 17.94 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 19.33 L 9.88 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 15.26 L 3.42 16.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 8.74 L 3.42 7.87"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 4.67 L 9.88 2.72"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 6.12 L 17.94 4.55"
      }
    ]
  ]
};

export const StridoFish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0" />
      <path d="M 5.69 12.00 a 6.31 6.31 0 1 1 12.63 0 a 6.31 6.31 0 1 1 -12.63 0" />
      <path d="M 19.52 12.00 L 21.52 12.00" />
      <path d="M 16.69 17.88 L 17.94 19.45" />
      <path d="M 10.33 19.33 L 9.88 21.28" />
      <path d="M 5.22 15.26 L 3.42 16.13" />
      <path d="M 5.22 8.74 L 3.42 7.87" />
      <path d="M 10.33 4.67 L 9.88 2.72" />
      <path d="M 16.69 6.12 L 17.94 4.55" />
      {children}
    </svg>
  );
});

export default StridoFish;

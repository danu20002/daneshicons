import React from 'react';

export const iconData = {
  "id": "SolidoHabit",
  "name": "SolidoHabit",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 12.00 a 7.58 7.58 0 1 0 15.15 0 a 7.58 7.58 0 1 0 -15.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 12.00 a 4.69 4.69 0 1 1 9.38 0 a 4.69 4.69 0 1 1 -9.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.08 12.00 L 21.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 18.13 L 16.54 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 18.13 L 7.46 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 L 2.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 5.87 L 7.46 4.14"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 5.87 L 16.54 4.14"
      }
    ]
  ]
};

export const SolidoHabit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 12.00 a 7.58 7.58 0 1 0 15.15 0 a 7.58 7.58 0 1 0 -15.15 0" />
      <path d="M 7.31 12.00 a 4.69 4.69 0 1 1 9.38 0 a 4.69 4.69 0 1 1 -9.38 0" />
      <path d="M 19.08 12.00 L 21.08 12.00" />
      <path d="M 15.54 18.13 L 16.54 19.86" />
      <path d="M 8.46 18.13 L 7.46 19.86" />
      <path d="M 4.92 12.00 L 2.92 12.00" />
      <path d="M 8.46 5.87 L 7.46 4.14" />
      <path d="M 15.54 5.87 L 16.54 4.14" />
      {children}
    </svg>
  );
});

export default SolidoHabit;

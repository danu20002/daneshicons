import React from 'react';

export const iconData = {
  "id": "SurgeCog",
  "name": "SurgeCog",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.73 0 a 8.87 8.87 0 1 0 -17.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 a 7.22 7.22 0 1 1 14.44 0 a 7.22 7.22 0 1 1 -14.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 12.00 L 22.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 16.52 L 20.72 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.48 19.61 L 16.31 21.43"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 20.28 L 10.52 22.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 18.32 L 5.21 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 14.36 L 2.05 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 9.64 L 2.05 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 5.68 L 5.21 4.17"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 3.72 L 10.52 1.74"
      }
    ],
    [
      "path",
      {
        "d": "M 15.48 4.39 L 16.31 2.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 7.48 L 20.72 6.40"
      }
    ]
  ]
};

export const SurgeCog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.73 0 a 8.87 8.87 0 1 0 -17.73 0" />
      <path d="M 4.78 12.00 a 7.22 7.22 0 1 1 14.44 0 a 7.22 7.22 0 1 1 -14.44 0" />
      <path d="M 20.37 12.00 L 22.37 12.00" />
      <path d="M 19.04 16.52 L 20.72 17.60" />
      <path d="M 15.48 19.61 L 16.31 21.43" />
      <path d="M 10.81 20.28 L 10.52 22.26" />
      <path d="M 6.52 18.32 L 5.21 19.83" />
      <path d="M 3.97 14.36 L 2.05 14.92" />
      <path d="M 3.97 9.64 L 2.05 9.08" />
      <path d="M 6.52 5.68 L 5.21 4.17" />
      <path d="M 10.81 3.72 L 10.52 1.74" />
      <path d="M 15.48 4.39 L 16.31 2.57" />
      <path d="M 19.04 7.48 L 20.72 6.40" />
      {children}
    </svg>
  );
});

export default SurgeCog;

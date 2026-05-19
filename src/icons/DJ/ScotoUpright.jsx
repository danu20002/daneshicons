import React from 'react';

export const iconData = {
  "id": "ScotoUpright",
  "name": "ScotoUpright",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 12.00 a 6.48 6.48 0 1 1 12.96 0 a 6.48 6.48 0 1 1 -12.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 12.00 L 22.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 16.83 L 20.26 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.54 19.81 L 15.15 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 19.81 L 8.85 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 16.83 L 3.74 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 L 1.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 7.17 L 3.74 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 4.19 L 8.85 2.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.54 4.19 L 15.15 2.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 7.17 L 20.26 6.00"
      }
    ]
  ]
};

export const ScotoUpright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0" />
      <path d="M 5.52 12.00 a 6.48 6.48 0 1 1 12.96 0 a 6.48 6.48 0 1 1 -12.96 0" />
      <path d="M 20.21 12.00 L 22.21 12.00" />
      <path d="M 18.64 16.83 L 20.26 18.00" />
      <path d="M 14.54 19.81 L 15.15 21.71" />
      <path d="M 9.46 19.81 L 8.85 21.71" />
      <path d="M 5.36 16.83 L 3.74 18.00" />
      <path d="M 3.79 12.00 L 1.79 12.00" />
      <path d="M 5.36 7.17 L 3.74 6.00" />
      <path d="M 9.46 4.19 L 8.85 2.29" />
      <path d="M 14.54 4.19 L 15.15 2.29" />
      <path d="M 18.64 7.17 L 20.26 6.00" />
      {children}
    </svg>
  );
});

export default ScotoUpright;

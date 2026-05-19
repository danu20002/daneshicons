import React from 'react';

export const iconData = {
  "id": "LimoRear",
  "name": "LimoRear",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.72 12.00 L 21.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.25 16.54 L 19.86 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 14.39 19.34 L 15.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 19.34 L 9.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 16.54 L 4.14 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 12.00 L 2.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 7.46 L 4.14 6.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 4.66 L 9.00 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 14.39 4.66 L 15.00 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 18.25 7.46 L 19.86 6.29"
      }
    ]
  ]
};

export const LimoRear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 12.00 a 8.22 8.22 0 1 0 16.44 0 a 8.22 8.22 0 1 0 -16.44 0" />
      <path d="M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0" />
      <path d="M 19.72 12.00 L 21.72 12.00" />
      <path d="M 18.25 16.54 L 19.86 17.71" />
      <path d="M 14.39 19.34 L 15.00 21.25" />
      <path d="M 9.61 19.34 L 9.00 21.25" />
      <path d="M 5.75 16.54 L 4.14 17.71" />
      <path d="M 4.28 12.00 L 2.28 12.00" />
      <path d="M 5.75 7.46 L 4.14 6.29" />
      <path d="M 9.61 4.66 L 9.00 2.75" />
      <path d="M 14.39 4.66 L 15.00 2.75" />
      <path d="M 18.25 7.46 L 19.86 6.29" />
      {children}
    </svg>
  );
});

export default LimoRear;

import React from 'react';

export const iconData = {
  "id": "RegioEye",
  "name": "RegioEye",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.31 12.00 a 7.69 7.69 0 1 0 15.37 0 a 7.69 7.69 0 1 0 -15.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 12.00 a 6.06 6.06 0 1 1 12.13 0 a 6.06 6.06 0 1 1 -12.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 12.00 L 21.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.22 15.59 L 19.96 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.59 18.22 L 16.59 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.19 L 12.00 21.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 18.22 L 7.41 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 15.59 L 4.04 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 12.00 L 2.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 8.41 L 4.04 7.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 5.78 L 7.41 4.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.81 L 12.00 2.81"
      }
    ],
    [
      "path",
      {
        "d": "M 15.59 5.78 L 16.59 4.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.22 8.41 L 19.96 7.41"
      }
    ]
  ]
};

export const RegioEye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.31 12.00 a 7.69 7.69 0 1 0 15.37 0 a 7.69 7.69 0 1 0 -15.37 0" />
      <path d="M 5.94 12.00 a 6.06 6.06 0 1 1 12.13 0 a 6.06 6.06 0 1 1 -12.13 0" />
      <path d="M 19.19 12.00 L 21.19 12.00" />
      <path d="M 18.22 15.59 L 19.96 16.59" />
      <path d="M 15.59 18.22 L 16.59 19.96" />
      <path d="M 12.00 19.19 L 12.00 21.19" />
      <path d="M 8.41 18.22 L 7.41 19.96" />
      <path d="M 5.78 15.59 L 4.04 16.59" />
      <path d="M 4.81 12.00 L 2.81 12.00" />
      <path d="M 5.78 8.41 L 4.04 7.41" />
      <path d="M 8.41 5.78 L 7.41 4.04" />
      <path d="M 12.00 4.81 L 12.00 2.81" />
      <path d="M 15.59 5.78 L 16.59 4.04" />
      <path d="M 18.22 8.41 L 19.96 7.41" />
      {children}
    </svg>
  );
});

export default RegioEye;

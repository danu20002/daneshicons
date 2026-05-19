import React from 'react';

export const iconData = {
  "id": "ViragoDesert",
  "name": "ViragoDesert",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.69 0 a 8.34 8.34 0 1 0 -16.69 0"
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
        "d": "M 19.84 12.00 L 21.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 16.24 L 20.28 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 19.14 L 16.09 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 19.76 L 10.60 21.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 17.93 L 5.55 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 14.21 L 2.55 14.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 9.79 L 2.55 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.07 L 5.55 4.56"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 4.24 L 10.60 2.26"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 4.86 L 16.09 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 7.76 L 20.28 6.68"
      }
    ]
  ]
};

export const ViragoDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.69 0 a 8.34 8.34 0 1 0 -16.69 0" />
      <path d="M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 18.60 16.24 L 20.28 17.32" />
      <path d="M 15.26 19.14 L 16.09 20.95" />
      <path d="M 10.88 19.76 L 10.60 21.74" />
      <path d="M 6.86 17.93 L 5.55 19.44" />
      <path d="M 4.47 14.21 L 2.55 14.77" />
      <path d="M 4.47 9.79 L 2.55 9.23" />
      <path d="M 6.86 6.07 L 5.55 4.56" />
      <path d="M 10.88 4.24 L 10.60 2.26" />
      <path d="M 15.26 4.86 L 16.09 3.05" />
      <path d="M 18.60 7.76 L 20.28 6.68" />
      {children}
    </svg>
  );
});

export default ViragoDesert;

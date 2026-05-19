import React from 'react';

export const iconData = {
  "id": "OpticForest",
  "name": "OpticForest",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 12.00 a 5.88 5.88 0 1 1 11.76 0 a 5.88 5.88 0 1 1 -11.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 12.00 L 21.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.36 16.09 L 20.04 17.17"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 18.88 L 15.97 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 10.92 19.48 L 10.64 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 17.71 L 5.74 19.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 14.13 L 2.83 14.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 9.87 L 2.83 9.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 6.29 L 5.74 4.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.92 4.52 L 10.64 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 5.12 L 15.97 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 18.36 7.91 L 20.04 6.83"
      }
    ]
  ]
};

export const OpticForest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0" />
      <path d="M 6.12 12.00 a 5.88 5.88 0 1 1 11.76 0 a 5.88 5.88 0 1 1 -11.76 0" />
      <path d="M 19.56 12.00 L 21.56 12.00" />
      <path d="M 18.36 16.09 L 20.04 17.17" />
      <path d="M 15.14 18.88 L 15.97 20.70" />
      <path d="M 10.92 19.48 L 10.64 21.46" />
      <path d="M 7.05 17.71 L 5.74 19.22" />
      <path d="M 4.75 14.13 L 2.83 14.69" />
      <path d="M 4.75 9.87 L 2.83 9.31" />
      <path d="M 7.05 6.29 L 5.74 4.78" />
      <path d="M 10.92 4.52 L 10.64 2.54" />
      <path d="M 15.14 5.12 L 15.97 3.30" />
      <path d="M 18.36 7.91 L 20.04 6.83" />
      {children}
    </svg>
  );
});

export default OpticForest;

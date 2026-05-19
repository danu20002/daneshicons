import React from 'react';

export const iconData = {
  "id": "SphingoWarp",
  "name": "SphingoWarp",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 1 9.59 0 a 4.80 4.80 0 1 1 -9.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 12.00 L 20.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 15.71 L 19.45 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.85 18.24 L 15.68 20.06"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 18.79 L 10.74 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 17.18 L 6.20 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 13.93 L 3.50 14.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 10.07 L 3.50 9.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 6.82 L 6.20 5.31"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 5.21 L 10.74 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 14.85 5.76 L 15.68 3.94"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 8.29 L 19.45 7.21"
      }
    ]
  ]
};

export const SphingoWarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 1 9.59 0 a 4.80 4.80 0 1 1 -9.59 0" />
      <path d="M 18.86 12.00 L 20.86 12.00" />
      <path d="M 17.77 15.71 L 19.45 16.79" />
      <path d="M 14.85 18.24 L 15.68 20.06" />
      <path d="M 11.02 18.79 L 10.74 20.77" />
      <path d="M 7.51 17.18 L 6.20 18.69" />
      <path d="M 5.42 13.93 L 3.50 14.49" />
      <path d="M 5.42 10.07 L 3.50 9.51" />
      <path d="M 7.51 6.82 L 6.20 5.31" />
      <path d="M 11.02 5.21 L 10.74 3.23" />
      <path d="M 14.85 5.76 L 15.68 3.94" />
      <path d="M 17.77 8.29 L 19.45 7.21" />
      {children}
    </svg>
  );
});

export default SphingoWarp;

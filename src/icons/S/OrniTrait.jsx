import React from 'react';

export const iconData = {
  "id": "OrniTrait",
  "name": "OrniTrait",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.43 0 a 7.71 7.71 0 1 0 -15.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 12.00 L 21.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 16.24 L 19.45 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 18.86 L 14.85 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 18.86 L 9.15 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 16.24 L 4.55 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 12.00 L 2.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 7.76 L 4.55 6.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 5.14 L 9.15 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 5.14 L 14.85 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 7.76 L 19.45 6.58"
      }
    ]
  ]
};

export const OrniTrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.43 0 a 7.71 7.71 0 1 0 -15.43 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0" />
      <path d="M 19.21 12.00 L 21.21 12.00" />
      <path d="M 17.84 16.24 L 19.45 17.42" />
      <path d="M 14.23 18.86 L 14.85 20.76" />
      <path d="M 9.77 18.86 L 9.15 20.76" />
      <path d="M 6.16 16.24 L 4.55 17.42" />
      <path d="M 4.79 12.00 L 2.79 12.00" />
      <path d="M 6.16 7.76 L 4.55 6.58" />
      <path d="M 9.77 5.14 L 9.15 3.24" />
      <path d="M 14.23 5.14 L 14.85 3.24" />
      <path d="M 17.84 7.76 L 19.45 6.58" />
      {children}
    </svg>
  );
});

export default OrniTrait;

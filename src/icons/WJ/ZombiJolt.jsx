import React from 'react';

export const iconData = {
  "id": "ZombiJolt",
  "name": "ZombiJolt",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 12.00 a 5.52 5.52 0 1 1 11.05 0 a 5.52 5.52 0 1 1 -11.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 12.00 L 21.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.36 17.36 L 18.78 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.58 L 12.00 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.64 17.36 L 5.22 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 12.00 L 2.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.64 6.64 L 5.22 5.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.42 L 12.00 2.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.36 6.64 L 18.78 5.22"
      }
    ]
  ]
};

export const ZombiJolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 12.00 a 8.08 8.08 0 1 0 16.17 0 a 8.08 8.08 0 1 0 -16.17 0" />
      <path d="M 6.48 12.00 a 5.52 5.52 0 1 1 11.05 0 a 5.52 5.52 0 1 1 -11.05 0" />
      <path d="M 19.58 12.00 L 21.58 12.00" />
      <path d="M 17.36 17.36 L 18.78 18.78" />
      <path d="M 12.00 19.58 L 12.00 21.58" />
      <path d="M 6.64 17.36 L 5.22 18.78" />
      <path d="M 4.42 12.00 L 2.42 12.00" />
      <path d="M 6.64 6.64 L 5.22 5.22" />
      <path d="M 12.00 4.42 L 12.00 2.42" />
      <path d="M 17.36 6.64 L 18.78 5.22" />
      {children}
    </svg>
  );
});

export default ZombiJolt;

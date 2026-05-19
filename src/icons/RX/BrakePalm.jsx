import React from 'react';

export const iconData = {
  "id": "BrakePalm",
  "name": "BrakePalm",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 12.00 a 9.66 9.66 0 1 0 19.32 0 a 9.66 9.66 0 1 0 -19.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 12.00 a 9.66 2.8980946155264973 0 1 0 19.32 0 a 9.66 2.8980946155264973 0 1 0 -19.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.83 5.17 A 2 2 0 0 0 18.83 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.83 5.17 A 2 2 0 0 1 18.83 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.34 A 2 2 0 0 0 12.00 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.34 A 2 2 0 0 1 12.00 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 5.17 A 2 2 0 0 0 5.17 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 5.17 A 2 2 0 0 1 5.17 18.83"
      }
    ]
  ]
};

export const BrakePalm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 12.00 a 9.66 9.66 0 1 0 19.32 0 a 9.66 9.66 0 1 0 -19.32 0" />
      <path d="M 2.34 12.00 a 9.66 2.8980946155264973 0 1 0 19.32 0 a 9.66 2.8980946155264973 0 1 0 -19.32 0" />
      <path d="M 18.83 5.17 A 2 2 0 0 0 18.83 18.83" />
      <path d="M 18.83 5.17 A 2 2 0 0 1 18.83 18.83" />
      <path d="M 12.00 2.34 A 2 2 0 0 0 12.00 21.66" />
      <path d="M 12.00 2.34 A 2 2 0 0 1 12.00 21.66" />
      <path d="M 5.17 5.17 A 2 2 0 0 0 5.17 18.83" />
      <path d="M 5.17 5.17 A 2 2 0 0 1 5.17 18.83" />
      {children}
    </svg>
  );
});

export default BrakePalm;

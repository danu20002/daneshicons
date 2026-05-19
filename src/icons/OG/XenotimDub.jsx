import React from 'react';

export const iconData = {
  "id": "XenotimDub",
  "name": "XenotimDub",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 7.66 a 7.52 2.255212437281528 0 1 0 15.03 0 a 7.52 2.255212437281528 0 1 0 -15.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 2.6040950154885647 0 1 0 17.36 0 a 8.68 2.6040950154885647 0 1 0 -17.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 16.34 a 7.52 2.255212437281528 0 1 0 15.03 0 a 7.52 2.255212437281528 0 1 0 -15.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 4.48 A 2 2 0 0 0 16.34 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 4.48 A 2 2 0 0 1 16.34 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 4.48 A 2 2 0 0 0 7.66 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 4.48 A 2 2 0 0 1 7.66 19.52"
      }
    ]
  ]
};

export const XenotimDub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0" />
      <path d="M 4.48 7.66 a 7.52 2.255212437281528 0 1 0 15.03 0 a 7.52 2.255212437281528 0 1 0 -15.03 0" />
      <path d="M 3.32 12.00 a 8.68 2.6040950154885647 0 1 0 17.36 0 a 8.68 2.6040950154885647 0 1 0 -17.36 0" />
      <path d="M 4.48 16.34 a 7.52 2.255212437281528 0 1 0 15.03 0 a 7.52 2.255212437281528 0 1 0 -15.03 0" />
      <path d="M 16.34 4.48 A 2 2 0 0 0 16.34 19.52" />
      <path d="M 16.34 4.48 A 2 2 0 0 1 16.34 19.52" />
      <path d="M 7.66 4.48 A 2 2 0 0 0 7.66 19.52" />
      <path d="M 7.66 4.48 A 2 2 0 0 1 7.66 19.52" />
      {children}
    </svg>
  );
});

export default XenotimDub;

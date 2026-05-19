import React from 'react';

export const iconData = {
  "id": "NonUniform",
  "name": "NonUniform",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 12.00 a 2.20 2.20 0 1 0 4.39 0 a 2.20 2.20 0 1 0 -4.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 12.00 a 4.32 4.32 0 1 0 8.64 0 a 4.32 4.32 0 1 0 -8.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 12.00 a 6.48 6.48 0 1 0 12.96 0 a 6.48 6.48 0 1 0 -12.96 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0"
      }
    ]
  ]
};

export const NonUniform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 12.00 a 2.20 2.20 0 1 0 4.39 0 a 2.20 2.20 0 1 0 -4.39 0" />
      <path d="M 7.68 12.00 a 4.32 4.32 0 1 0 8.64 0 a 4.32 4.32 0 1 0 -8.64 0" />
      <path d="M 5.52 12.00 a 6.48 6.48 0 1 0 12.96 0 a 6.48 6.48 0 1 0 -12.96 0" stroke-dasharray="3 1" />
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0" />
      {children}
    </svg>
  );
});

export default NonUniform;

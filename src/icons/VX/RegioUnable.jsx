import React from 'react';

export const iconData = {
  "id": "RegioUnable",
  "name": "RegioUnable",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 0 12.64 0 a 6.32 6.32 0 1 0 -12.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0"
      }
    ]
  ]
};

export const RegioUnable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 0 12.64 0 a 6.32 6.32 0 1 0 -12.64 0" />
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0" />
      {children}
    </svg>
  );
});

export default RegioUnable;

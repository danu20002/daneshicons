import React from 'react';

export const iconData = {
  "id": "UlulaHatch",
  "name": "UlulaHatch",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 12.00 a 4.01 4.01 0 1 0 8.01 0 a 4.01 4.01 0 1 0 -8.01 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 0 10.55 0 a 5.27 5.27 0 1 0 -10.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 12.00 a 7.20 7.20 0 1 0 14.41 0 a 7.20 7.20 0 1 0 -14.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0",
        "stroke-dasharray": "3 2"
      }
    ]
  ]
};

export const UlulaHatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0" />
      <path d="M 7.99 12.00 a 4.01 4.01 0 1 0 8.01 0 a 4.01 4.01 0 1 0 -8.01 0" stroke-dasharray="2 2" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 0 10.55 0 a 5.27 5.27 0 1 0 -10.55 0" />
      <path d="M 4.80 12.00 a 7.20 7.20 0 1 0 14.41 0 a 7.20 7.20 0 1 0 -14.41 0" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0" stroke-dasharray="3 2" />
      {children}
    </svg>
  );
});

export default UlulaHatch;

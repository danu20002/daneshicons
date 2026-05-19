import React from 'react';

export const iconData = {
  "id": "GravitoSize",
  "name": "GravitoSize",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.34 12.00 a 3.66 3.66 0 1 0 7.32 0 a 3.66 3.66 0 1 0 -7.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 12.00 a 5.53 5.53 0 1 0 11.05 0 a 5.53 5.53 0 1 0 -11.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 a 7.07 7.07 0 1 0 14.14 0 a 7.07 7.07 0 1 0 -14.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const GravitoSize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0" />
      <path d="M 8.34 12.00 a 3.66 3.66 0 1 0 7.32 0 a 3.66 3.66 0 1 0 -7.32 0" />
      <path d="M 6.47 12.00 a 5.53 5.53 0 1 0 11.05 0 a 5.53 5.53 0 1 0 -11.05 0" />
      <path d="M 4.93 12.00 a 7.07 7.07 0 1 0 14.14 0 a 7.07 7.07 0 1 0 -14.14 0" />
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default GravitoSize;

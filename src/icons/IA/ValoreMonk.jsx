import React from 'react';

export const iconData = {
  "id": "ValoreMonk",
  "name": "ValoreMonk",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.07 0 a 4.04 4.04 0 1 0 -8.07 0"
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
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 0 14.25 0 a 7.13 7.13 0 1 0 -14.25 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.60 0 a 8.80 8.80 0 1 0 -17.60 0",
        "stroke-dasharray": "4 1"
      }
    ]
  ]
};

export const ValoreMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.07 0 a 4.04 4.04 0 1 0 -8.07 0" />
      <path d="M 6.47 12.00 a 5.53 5.53 0 1 0 11.05 0 a 5.53 5.53 0 1 0 -11.05 0" />
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 0 14.25 0 a 7.13 7.13 0 1 0 -14.25 0" stroke-dasharray="3 3" />
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.60 0 a 8.80 8.80 0 1 0 -17.60 0" stroke-dasharray="4 1" />
      {children}
    </svg>
  );
});

export default ValoreMonk;

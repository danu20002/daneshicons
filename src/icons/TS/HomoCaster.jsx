import React from 'react';

export const iconData = {
  "id": "HomoCaster",
  "name": "HomoCaster",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 12.00 a 5.50 5.50 0 1 0 11.01 0 a 5.50 5.50 0 1 0 -11.01 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.75 0 a 6.88 6.88 0 1 0 -13.75 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 12.00 a 8.90 8.90 0 1 0 17.79 0 a 8.90 8.90 0 1 0 -17.79 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const HomoCaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0" />
      <path d="M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0" />
      <path d="M 6.50 12.00 a 5.50 5.50 0 1 0 11.01 0 a 5.50 5.50 0 1 0 -11.01 0" stroke-dasharray="4 2" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.75 0 a 6.88 6.88 0 1 0 -13.75 0" stroke-dasharray="3 3" />
      <path d="M 3.10 12.00 a 8.90 8.90 0 1 0 17.79 0 a 8.90 8.90 0 1 0 -17.79 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default HomoCaster;

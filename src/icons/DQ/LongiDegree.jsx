import React from 'react';

export const iconData = {
  "id": "LongiDegree",
  "name": "LongiDegree",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 12.00 a 6.25 6.25 0 1 0 12.49 0 a 6.25 6.25 0 1 0 -12.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0"
      }
    ]
  ]
};

export const LongiDegree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 12.00 a 2.26 2.26 0 1 0 4.52 0 a 2.26 2.26 0 1 0 -4.52 0" />
      <path d="M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0" stroke-dasharray="6 2" />
      <path d="M 5.75 12.00 a 6.25 6.25 0 1 0 12.49 0 a 6.25 6.25 0 1 0 -12.49 0" />
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0" />
      {children}
    </svg>
  );
});

export default LongiDegree;

import React from 'react';

export const iconData = {
  "id": "TubuloGleam",
  "name": "TubuloGleam",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 12.00 a 3.81 3.81 0 1 0 7.63 0 a 3.81 3.81 0 1 0 -7.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 0 10.89 0 a 5.44 5.44 0 1 0 -10.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0"
      }
    ]
  ]
};

export const TubuloGleam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0" />
      <path d="M 8.19 12.00 a 3.81 3.81 0 1 0 7.63 0 a 3.81 3.81 0 1 0 -7.63 0" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 0 10.89 0 a 5.44 5.44 0 1 0 -10.89 0" />
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0" />
      {children}
    </svg>
  );
});

export default TubuloGleam;

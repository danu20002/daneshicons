import React from 'react';

export const iconData = {
  "id": "MilleLint",
  "name": "MilleLint",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.85 5.04 C 14.63 13.54, 16.53 16.23, 16.21 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 7.72 C 10.29 12.39, 13.06 7.51, 17.68 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 4.33 C 13.46 10.00, 9.01 7.70, 16.16 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 2.08 C 13.48 4.13, 10.89 12.82, 17.19 16.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 3.39 C 4.48 13.15, 6.10 19.17, 14.24 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 5.43 C 14.31 13.66, 4.33 10.87, 19.87 21.76"
      }
    ]
  ]
};

export const MilleLint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.85 5.04 C 14.63 13.54, 16.53 16.23, 16.21 17.49" />
      <path d="M 4.02 7.72 C 10.29 12.39, 13.06 7.51, 17.68 18.44" />
      <path d="M 5.47 4.33 C 13.46 10.00, 9.01 7.70, 16.16 18.10" />
      <path d="M 9.31 2.08 C 13.48 4.13, 10.89 12.82, 17.19 16.17" />
      <path d="M 7.12 3.39 C 4.48 13.15, 6.10 19.17, 14.24 16.86" />
      <path d="M 4.54 5.43 C 14.31 13.66, 4.33 10.87, 19.87 21.76" />
      {children}
    </svg>
  );
});

export default MilleLint;

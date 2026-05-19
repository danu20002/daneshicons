import React from 'react';

export const iconData = {
  "id": "ViceElf",
  "name": "ViceElf",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.92 8.96 C 4.66 6.88, 9.39 14.35, 14.47 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 8.21 C 16.81 14.73, 14.26 12.31, 18.48 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 7.75 C 16.82 5.35, 14.94 8.69, 20.19 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 2.58 5.76 C 4.77 9.66, 8.35 4.98, 16.04 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 9.19 C 15.02 7.42, 6.10 14.71, 20.14 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 9.25 C 6.08 16.87, 19.64 17.29, 16.62 14.81"
      }
    ]
  ]
};

export const ViceElf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.92 8.96 C 4.66 6.88, 9.39 14.35, 14.47 21.29" />
      <path d="M 3.25 8.21 C 16.81 14.73, 14.26 12.31, 18.48 21.35" />
      <path d="M 3.84 7.75 C 16.82 5.35, 14.94 8.69, 20.19 18.01" />
      <path d="M 2.58 5.76 C 4.77 9.66, 8.35 4.98, 16.04 16.45" />
      <path d="M 6.28 9.19 C 15.02 7.42, 6.10 14.71, 20.14 16.05" />
      <path d="M 3.65 9.25 C 6.08 16.87, 19.64 17.29, 16.62 14.81" />
      {children}
    </svg>
  );
});

export default ViceElf;

import React from 'react';

export const iconData = {
  "id": "VulcanoSpear",
  "name": "VulcanoSpear",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.64 6.14 C 11.73 12.74, 6.04 14.69, 19.81 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 7.34 C 12.73 7.90, 13.05 10.96, 16.50 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 8.54 C 5.21 6.23, 10.32 15.18, 19.04 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 8.09 C 12.41 8.51, 5.88 15.84, 17.74 15.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 8.69 C 7.71 8.13, 10.80 14.19, 14.09 18.39"
      }
    ]
  ]
};

export const VulcanoSpear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.64 6.14 C 11.73 12.74, 6.04 14.69, 19.81 21.78" />
      <path d="M 2.13 7.34 C 12.73 7.90, 13.05 10.96, 16.50 14.73" />
      <path d="M 4.31 8.54 C 5.21 6.23, 10.32 15.18, 19.04 14.17" />
      <path d="M 6.04 8.09 C 12.41 8.51, 5.88 15.84, 17.74 15.45" />
      <path d="M 5.92 8.69 C 7.71 8.13, 10.80 14.19, 14.09 18.39" />
      {children}
    </svg>
  );
});

export default VulcanoSpear;

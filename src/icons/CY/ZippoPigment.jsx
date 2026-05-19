import React from 'react';

export const iconData = {
  "id": "ZippoPigment",
  "name": "ZippoPigment",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 2.56 C 17.05 8.34, 10.86 8.75, 16.14 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 4.48 C 15.03 10.05, 10.15 4.52, 14.71 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 4.96 C 19.32 6.71, 11.83 8.54, 15.64 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 2.42 3.95 C 7.24 16.55, 16.42 11.69, 17.58 16.26"
      }
    ]
  ]
};

export const ZippoPigment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 2.56 C 17.05 8.34, 10.86 8.75, 16.14 17.75" />
      <path d="M 7.01 4.48 C 15.03 10.05, 10.15 4.52, 14.71 19.76" />
      <path d="M 8.15 4.96 C 19.32 6.71, 11.83 8.54, 15.64 20.32" />
      <path d="M 2.42 3.95 C 7.24 16.55, 16.42 11.69, 17.58 16.26" />
      {children}
    </svg>
  );
});

export default ZippoPigment;

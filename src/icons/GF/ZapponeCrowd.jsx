import React from 'react';

export const iconData = {
  "id": "ZapponeCrowd",
  "name": "ZapponeCrowd",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 8.49 0 1 0 16.99 0 a 8.49 8.49 0 1 0 -16.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 7.75 a 7.36 2.206944164715093 0 1 0 14.71 0 a 7.36 2.206944164715093 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 2.5483596151694656 0 1 0 16.99 0 a 8.49 2.5483596151694656 0 1 0 -16.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 16.25 a 7.36 2.206944164715093 0 1 0 14.71 0 a 7.36 2.206944164715093 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.51 A 2 2 0 0 0 12.00 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.51 A 2 2 0 0 1 12.00 20.49"
      }
    ]
  ]
};

export const ZapponeCrowd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 12.00 a 8.49 8.49 0 1 0 16.99 0 a 8.49 8.49 0 1 0 -16.99 0" />
      <path d="M 4.64 7.75 a 7.36 2.206944164715093 0 1 0 14.71 0 a 7.36 2.206944164715093 0 1 0 -14.71 0" />
      <path d="M 3.51 12.00 a 8.49 2.5483596151694656 0 1 0 16.99 0 a 8.49 2.5483596151694656 0 1 0 -16.99 0" />
      <path d="M 4.64 16.25 a 7.36 2.206944164715093 0 1 0 14.71 0 a 7.36 2.206944164715093 0 1 0 -14.71 0" />
      <path d="M 12.00 3.51 A 2 2 0 0 0 12.00 20.49" />
      <path d="M 12.00 3.51 A 2 2 0 0 1 12.00 20.49" />
      {children}
    </svg>
  );
});

export default ZapponeCrowd;

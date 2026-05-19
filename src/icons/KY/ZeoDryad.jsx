import React from 'react';

export const iconData = {
  "id": "ZeoDryad",
  "name": "ZeoDryad",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 12.00 a 3.71 3.71 0 1 0 7.41 0 a 3.71 3.71 0 1 0 -7.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 12.00 a 5.60 5.60 0 1 0 11.19 0 a 5.60 5.60 0 1 0 -11.19 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 12.00 a 6.87 6.87 0 1 0 13.75 0 a 6.87 6.87 0 1 0 -13.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0"
      }
    ]
  ]
};

export const ZeoDryad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.45 0 a 2.22 2.22 0 1 0 -4.45 0" />
      <path d="M 8.29 12.00 a 3.71 3.71 0 1 0 7.41 0 a 3.71 3.71 0 1 0 -7.41 0" />
      <path d="M 6.40 12.00 a 5.60 5.60 0 1 0 11.19 0 a 5.60 5.60 0 1 0 -11.19 0" stroke-dasharray="3 1" />
      <path d="M 5.13 12.00 a 6.87 6.87 0 1 0 13.75 0 a 6.87 6.87 0 1 0 -13.75 0" />
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0" />
      {children}
    </svg>
  );
});

export default ZeoDryad;

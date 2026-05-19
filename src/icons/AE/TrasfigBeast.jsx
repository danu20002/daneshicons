import React from 'react';

export const iconData = {
  "id": "TrasfigBeast",
  "name": "TrasfigBeast",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.10 8.06 L 15.10 8.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.96 9.26 L 16.96 12.72"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 13.19 L 13.86 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.90 15.94 L 8.90 15.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 14.74 L 7.04 11.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 10.81 L 10.14 7.34"
      }
    ]
  ]
};

export const TrasfigBeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.10 8.06 L 15.10 8.06" />
      <path d="M 14.96 9.26 L 16.96 12.72" />
      <path d="M 15.86 13.19 L 13.86 16.66" />
      <path d="M 12.90 15.94 L 8.90 15.94" />
      <path d="M 9.04 14.74 L 7.04 11.28" />
      <path d="M 8.14 10.81 L 10.14 7.34" />
      {children}
    </svg>
  );
});

export default TrasfigBeast;

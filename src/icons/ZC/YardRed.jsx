import React from 'react';

export const iconData = {
  "id": "YardRed",
  "name": "YardRed",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.21 12.88 L 6.64 19.53 L 8.16 3.59 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 14.16 L 7.11 16.16 L 10.84 5.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.49 14.04 L 8.98 13.14 L 12.53 8.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.13 12.17 L 11.79 12.02 L 12.08 11.81 Z"
      }
    ]
  ]
};

export const YardRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.21 12.88 L 6.64 19.53 L 8.16 3.59 Z" />
      <path d="M 18.05 14.16 L 7.11 16.16 L 10.84 5.68 Z" />
      <path d="M 14.49 14.04 L 8.98 13.14 L 12.53 8.82 Z" />
      <path d="M 12.13 12.17 L 11.79 12.02 L 12.08 11.81 Z" />
      {children}
    </svg>
  );
});

export default YardRed;

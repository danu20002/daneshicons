import React from 'react';

export const iconData = {
  "id": "AviExist",
  "name": "AviExist",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.49 12.08 L 16.68 20.26 L 7.18 20.18 L 2.51 11.92 L 7.32 3.74 L 16.82 3.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 14.35 L 12.83 18.12 L 7.11 15.78 L 6.29 9.65 L 11.17 5.88 L 16.89 8.22 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.37 13.99 L 11.46 15.05 L 9.09 13.06 L 9.63 10.01 L 12.54 8.95 L 14.91 10.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.03 12.04 L 11.98 12.05 L 11.95 12.01 L 11.97 11.96 L 12.02 11.95 L 12.05 11.99 Z"
      }
    ]
  ]
};

export const AviExist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.49 12.08 L 16.68 20.26 L 7.18 20.18 L 2.51 11.92 L 7.32 3.74 L 16.82 3.82 Z" />
      <path d="M 17.71 14.35 L 12.83 18.12 L 7.11 15.78 L 6.29 9.65 L 11.17 5.88 L 16.89 8.22 Z" />
      <path d="M 14.37 13.99 L 11.46 15.05 L 9.09 13.06 L 9.63 10.01 L 12.54 8.95 L 14.91 10.94 Z" />
      <path d="M 12.03 12.04 L 11.98 12.05 L 11.95 12.01 L 11.97 11.96 L 12.02 11.95 L 12.05 11.99 Z" />
      {children}
    </svg>
  );
});

export default AviExist;

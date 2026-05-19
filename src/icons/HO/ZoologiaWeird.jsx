import React from 'react';

export const iconData = {
  "id": "ZoologiaWeird",
  "name": "ZoologiaWeird",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.01 12.67 L 15.92 20.14 L 6.91 19.46 L 2.99 11.33 L 8.08 3.86 L 17.09 4.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.62 14.36 L 12.77 18.05 L 7.15 15.69 L 6.38 9.64 L 11.23 5.95 L 16.85 8.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 14.06 L 11.31 14.92 L 9.12 12.86 L 9.81 9.94 L 12.69 9.08 L 14.88 11.14 Z"
      }
    ]
  ]
};

export const ZoologiaWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.01 12.67 L 15.92 20.14 L 6.91 19.46 L 2.99 11.33 L 8.08 3.86 L 17.09 4.54 Z" />
      <path d="M 17.62 14.36 L 12.77 18.05 L 7.15 15.69 L 6.38 9.64 L 11.23 5.95 L 16.85 8.31 Z" />
      <path d="M 14.19 14.06 L 11.31 14.92 L 9.12 12.86 L 9.81 9.94 L 12.69 9.08 L 14.88 11.14 Z" />
      {children}
    </svg>
  );
});

export default ZoologiaWeird;

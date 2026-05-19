import React from 'react';

export const iconData = {
  "id": "VitaleRavine",
  "name": "VitaleRavine",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.23 12.17 L 16.47 20.08 L 7.23 19.91 L 2.77 11.83 L 7.53 3.92 L 16.77 4.09 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.58 14.24 L 12.85 17.96 L 7.27 15.71 L 6.42 9.76 L 11.15 6.04 L 16.73 8.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.50 14.17 L 11.37 15.26 L 8.87 13.08 L 9.50 9.83 L 12.63 8.74 L 15.13 10.92 Z"
      }
    ]
  ]
};

export const VitaleRavine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.23 12.17 L 16.47 20.08 L 7.23 19.91 L 2.77 11.83 L 7.53 3.92 L 16.77 4.09 Z" />
      <path d="M 17.58 14.24 L 12.85 17.96 L 7.27 15.71 L 6.42 9.76 L 11.15 6.04 L 16.73 8.29 Z" />
      <path d="M 14.50 14.17 L 11.37 15.26 L 8.87 13.08 L 9.50 9.83 L 12.63 8.74 L 15.13 10.92 Z" />
      {children}
    </svg>
  );
});

export default VitaleRavine;

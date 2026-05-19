import React from 'react';

export const iconData = {
  "id": "SynaptoEffort",
  "name": "SynaptoEffort",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 13.72 L 15.08 20.78 L 5.94 19.06 L 2.86 10.28 L 8.92 3.22 L 18.06 4.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 14.83 L 12.26 18.11 L 6.84 15.28 L 6.58 9.17 L 11.74 5.89 L 17.16 8.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.42 14.24 L 11.27 15.22 L 8.85 12.98 L 9.58 9.76 L 12.73 8.78 L 15.15 11.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.23 12.35 L 11.81 12.37 L 11.58 12.02 L 11.77 11.65 L 12.19 11.63 L 12.42 11.98 Z"
      }
    ]
  ]
};

export const SynaptoEffort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 13.72 L 15.08 20.78 L 5.94 19.06 L 2.86 10.28 L 8.92 3.22 L 18.06 4.94 Z" />
      <path d="M 17.42 14.83 L 12.26 18.11 L 6.84 15.28 L 6.58 9.17 L 11.74 5.89 L 17.16 8.72 Z" />
      <path d="M 14.42 14.24 L 11.27 15.22 L 8.85 12.98 L 9.58 9.76 L 12.73 8.78 L 15.15 11.02 Z" />
      <path d="M 12.23 12.35 L 11.81 12.37 L 11.58 12.02 L 11.77 11.65 L 12.19 11.63 L 12.42 11.98 Z" />
      {children}
    </svg>
  );
});

export default SynaptoEffort;

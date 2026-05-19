import React from 'react';

export const iconData = {
  "id": "LysoTree",
  "name": "LysoTree",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.17 12.27 L 16.36 20.08 L 7.18 19.81 L 2.83 11.73 L 7.64 3.92 L 16.82 4.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.78 14.58 L 12.65 18.30 L 6.87 15.71 L 6.22 9.42 L 11.35 5.70 L 17.13 8.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.37 14.12 L 11.35 15.12 L 8.98 12.99 L 9.63 9.88 L 12.65 8.88 L 15.02 11.01 Z"
      }
    ]
  ]
};

export const LysoTree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.17 12.27 L 16.36 20.08 L 7.18 19.81 L 2.83 11.73 L 7.64 3.92 L 16.82 4.19 Z" />
      <path d="M 17.78 14.58 L 12.65 18.30 L 6.87 15.71 L 6.22 9.42 L 11.35 5.70 L 17.13 8.29 Z" />
      <path d="M 14.37 14.12 L 11.35 15.12 L 8.98 12.99 L 9.63 9.88 L 12.65 8.88 L 15.02 11.01 Z" />
      {children}
    </svg>
  );
});

export default LysoTree;

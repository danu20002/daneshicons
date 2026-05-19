import React from 'react';

export const iconData = {
  "id": "RedoxBright",
  "name": "RedoxBright",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.31 13.59 L 15.28 20.86 L 5.97 19.27 L 2.69 10.41 L 8.72 3.14 L 18.03 4.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.08 13.93 L 13.37 18.23 L 7.29 16.31 L 5.92 10.07 L 10.63 5.77 L 16.71 7.69 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.66 13.90 L 11.68 15.26 L 9.02 13.36 L 9.34 10.10 L 12.32 8.74 L 14.98 10.64 Z"
      }
    ]
  ]
};

export const RedoxBright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.31 13.59 L 15.28 20.86 L 5.97 19.27 L 2.69 10.41 L 8.72 3.14 L 18.03 4.73 Z" />
      <path d="M 18.08 13.93 L 13.37 18.23 L 7.29 16.31 L 5.92 10.07 L 10.63 5.77 L 16.71 7.69 Z" />
      <path d="M 14.66 13.90 L 11.68 15.26 L 9.02 13.36 L 9.34 10.10 L 12.32 8.74 L 14.98 10.64 Z" />
      {children}
    </svg>
  );
});

export default RedoxBright;

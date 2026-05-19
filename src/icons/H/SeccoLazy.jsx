import React from 'react';

export const iconData = {
  "id": "SeccoLazy",
  "name": "SeccoLazy",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.67 8.71 C 13.98 10.58, 12.23 8.55, 19.74 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 7.86 C 17.23 9.38, 16.75 14.19, 16.10 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 6.81 C 19.01 5.57, 14.32 12.47, 19.16 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.18 7.44 C 5.53 17.37, 14.66 6.84, 21.93 14.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 6.67 C 13.01 17.54, 13.96 13.49, 21.90 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 2.84 C 18.10 12.09, 9.21 12.34, 19.17 21.09"
      }
    ]
  ]
};

export const SeccoLazy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.67 8.71 C 13.98 10.58, 12.23 8.55, 19.74 20.45" />
      <path d="M 6.72 7.86 C 17.23 9.38, 16.75 14.19, 16.10 19.98" />
      <path d="M 7.08 6.81 C 19.01 5.57, 14.32 12.47, 19.16 18.76" />
      <path d="M 9.18 7.44 C 5.53 17.37, 14.66 6.84, 21.93 14.31" />
      <path d="M 8.18 6.67 C 13.01 17.54, 13.96 13.49, 21.90 19.26" />
      <path d="M 3.90 2.84 C 18.10 12.09, 9.21 12.34, 19.17 21.09" />
      {children}
    </svg>
  );
});

export default SeccoLazy;

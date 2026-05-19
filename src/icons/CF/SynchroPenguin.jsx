import React from 'react';

export const iconData = {
  "id": "SynchroPenguin",
  "name": "SynchroPenguin",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.04 4.93 C 19.92 4.85, 19.31 18.82, 18.73 15.37"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 8.89 C 10.70 17.05, 12.71 8.71, 17.87 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 3.24 C 6.36 13.20, 7.98 4.07, 21.47 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 2.55 C 14.53 6.68, 16.12 8.99, 16.21 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 5.82 C 4.96 15.50, 12.63 15.07, 20.21 20.33"
      }
    ]
  ]
};

export const SynchroPenguin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.04 4.93 C 19.92 4.85, 19.31 18.82, 18.73 15.37" />
      <path d="M 3.98 8.89 C 10.70 17.05, 12.71 8.71, 17.87 14.83" />
      <path d="M 6.66 3.24 C 6.36 13.20, 7.98 4.07, 21.47 20.53" />
      <path d="M 4.12 2.55 C 14.53 6.68, 16.12 8.99, 16.21 16.31" />
      <path d="M 6.26 5.82 C 4.96 15.50, 12.63 15.07, 20.21 20.33" />
      {children}
    </svg>
  );
});

export default SynchroPenguin;

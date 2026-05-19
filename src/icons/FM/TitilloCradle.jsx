import React from 'react';

export const iconData = {
  "id": "TitilloCradle",
  "name": "TitilloCradle",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 12.00 a 9.04 9.04 0 1 0 18.08 0 a 9.04 9.04 0 1 0 -18.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.58 a 7.23 2.1691030699387195 0 1 0 14.46 0 a 7.23 2.1691030699387195 0 1 0 -14.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 10.19 a 8.86 2.6565978604271976 0 1 0 17.71 0 a 8.86 2.6565978604271976 0 1 0 -17.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 13.81 a 8.86 2.6565978604271976 0 1 0 17.71 0 a 8.86 2.6565978604271976 0 1 0 -17.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 17.42 a 7.23 2.169103069938719 0 1 0 14.46 0 a 7.23 2.169103069938719 0 1 0 -14.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.17 A 2 2 0 0 0 16.52 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 4.17 A 2 2 0 0 1 16.52 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.17 A 2 2 0 0 0 7.48 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 4.17 A 2 2 0 0 1 7.48 19.83"
      }
    ]
  ]
};

export const TitilloCradle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 12.00 a 9.04 9.04 0 1 0 18.08 0 a 9.04 9.04 0 1 0 -18.08 0" />
      <path d="M 4.77 6.58 a 7.23 2.1691030699387195 0 1 0 14.46 0 a 7.23 2.1691030699387195 0 1 0 -14.46 0" />
      <path d="M 3.14 10.19 a 8.86 2.6565978604271976 0 1 0 17.71 0 a 8.86 2.6565978604271976 0 1 0 -17.71 0" />
      <path d="M 3.14 13.81 a 8.86 2.6565978604271976 0 1 0 17.71 0 a 8.86 2.6565978604271976 0 1 0 -17.71 0" />
      <path d="M 4.77 17.42 a 7.23 2.169103069938719 0 1 0 14.46 0 a 7.23 2.169103069938719 0 1 0 -14.46 0" />
      <path d="M 16.52 4.17 A 2 2 0 0 0 16.52 19.83" />
      <path d="M 16.52 4.17 A 2 2 0 0 1 16.52 19.83" />
      <path d="M 7.48 4.17 A 2 2 0 0 0 7.48 19.83" />
      <path d="M 7.48 4.17 A 2 2 0 0 1 7.48 19.83" />
      {children}
    </svg>
  );
});

export default TitilloCradle;

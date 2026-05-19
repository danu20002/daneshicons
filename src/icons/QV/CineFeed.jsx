import React from 'react';

export const iconData = {
  "id": "CineFeed",
  "name": "CineFeed",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.47 8.39 C 11.13 16.99, 5.11 14.04, 14.29 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 8.13 C 8.50 6.20, 19.29 4.01, 18.32 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 7.42 C 7.67 9.26, 9.22 17.92, 14.24 15.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 5.50 C 9.04 19.41, 18.06 14.57, 19.67 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 2.56 C 13.59 5.60, 17.25 14.41, 15.09 15.64"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 3.29 C 18.26 14.39, 9.89 7.46, 16.77 14.54"
      }
    ]
  ]
};

export const CineFeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.47 8.39 C 11.13 16.99, 5.11 14.04, 14.29 19.39" />
      <path d="M 6.72 8.13 C 8.50 6.20, 19.29 4.01, 18.32 20.63" />
      <path d="M 4.01 7.42 C 7.67 9.26, 9.22 17.92, 14.24 15.58" />
      <path d="M 2.99 5.50 C 9.04 19.41, 18.06 14.57, 19.67 14.93" />
      <path d="M 5.69 2.56 C 13.59 5.60, 17.25 14.41, 15.09 15.64" />
      <path d="M 9.64 3.29 C 18.26 14.39, 9.89 7.46, 16.77 14.54" />
      {children}
    </svg>
  );
});

export default CineFeed;

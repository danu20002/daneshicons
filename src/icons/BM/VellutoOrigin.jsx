import React from 'react';

export const iconData = {
  "id": "VellutoOrigin",
  "name": "VellutoOrigin",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 9.62 C 16.64 18.33, 5.18 16.86, 16.28 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 7.81 C 4.11 4.91, 16.43 17.01, 17.56 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 9.04 C 15.42 13.34, 10.80 12.51, 20.32 16.76"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 6.91 C 4.73 15.86, 8.23 6.91, 14.73 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 5.60 C 5.97 12.96, 10.81 4.63, 14.04 14.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 5.59 C 8.36 14.44, 5.40 13.03, 19.07 14.59"
      }
    ]
  ]
};

export const VellutoOrigin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 9.62 C 16.64 18.33, 5.18 16.86, 16.28 18.66" />
      <path d="M 3.92 7.81 C 4.11 4.91, 16.43 17.01, 17.56 17.82" />
      <path d="M 6.58 9.04 C 15.42 13.34, 10.80 12.51, 20.32 16.76" />
      <path d="M 3.04 6.91 C 4.73 15.86, 8.23 6.91, 14.73 19.99" />
      <path d="M 4.01 5.60 C 5.97 12.96, 10.81 4.63, 14.04 14.35" />
      <path d="M 5.42 5.59 C 8.36 14.44, 5.40 13.03, 19.07 14.59" />
      {children}
    </svg>
  );
});

export default VellutoOrigin;

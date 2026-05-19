import React from 'react';

export const iconData = {
  "id": "IridoCradle",
  "name": "IridoCradle",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 8.96 C 11.84 19.72, 4.40 13.86, 21.33 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 5.20 C 14.13 18.28, 10.35 10.17, 20.87 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 4.76 C 12.73 11.03, 10.42 9.21, 15.48 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 6.29 C 15.51 14.15, 16.77 5.81, 16.20 16.93"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 6.79 C 6.96 9.56, 17.66 7.37, 14.47 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.16 5.87 C 5.13 7.59, 18.66 15.40, 15.11 17.11"
      }
    ]
  ]
};

export const IridoCradle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 8.96 C 11.84 19.72, 4.40 13.86, 21.33 17.45" />
      <path d="M 6.02 5.20 C 14.13 18.28, 10.35 10.17, 20.87 14.48" />
      <path d="M 6.20 4.76 C 12.73 11.03, 10.42 9.21, 15.48 14.98" />
      <path d="M 8.00 6.29 C 15.51 14.15, 16.77 5.81, 16.20 16.93" />
      <path d="M 4.94 6.79 C 6.96 9.56, 17.66 7.37, 14.47 19.53" />
      <path d="M 8.16 5.87 C 5.13 7.59, 18.66 15.40, 15.11 17.11" />
      {children}
    </svg>
  );
});

export default IridoCradle;

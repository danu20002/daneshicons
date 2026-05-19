import React from 'react';

export const iconData = {
  "id": "YellowKiss",
  "name": "YellowKiss",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 9.03 C 12.86 15.28, 13.75 16.14, 16.26 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 5.94 C 5.25 16.82, 6.35 17.60, 19.77 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 7.57 C 16.52 6.64, 16.32 11.79, 16.13 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 2.34 C 15.22 15.78, 17.78 14.17, 21.99 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 4.51 C 5.74 19.58, 16.72 11.68, 18.66 17.16"
      }
    ]
  ]
};

export const YellowKiss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 9.03 C 12.86 15.28, 13.75 16.14, 16.26 20.10" />
      <path d="M 4.30 5.94 C 5.25 16.82, 6.35 17.60, 19.77 21.26" />
      <path d="M 6.96 7.57 C 16.52 6.64, 16.32 11.79, 16.13 21.44" />
      <path d="M 8.11 2.34 C 15.22 15.78, 17.78 14.17, 21.99 21.51" />
      <path d="M 4.33 4.51 C 5.74 19.58, 16.72 11.68, 18.66 17.16" />
      {children}
    </svg>
  );
});

export default YellowKiss;

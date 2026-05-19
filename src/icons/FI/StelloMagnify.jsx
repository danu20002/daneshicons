import React from 'react';

export const iconData = {
  "id": "StelloMagnify",
  "name": "StelloMagnify",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.10 16.95 L 8.90 20.02 L 16.90 14.09 L 11.98 2.87 L 6.40 17.20 L 17.38 2.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.37 11.23 L 10.56 19.31 L 15.73 16.36 L 7.41 18.68 L 12.73 17.48 L 21.07 4.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.80 8.53 Q 2.31 7.38 13.86 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 6.43 A 3.39 3.08 83 0 1 15.89 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 2.25 Q 18.26 5.77 9.09 9.07"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 16.54 A 2.17 4.70 137 0 0 15.97 14.09"
      }
    ]
  ]
};

export const StelloMagnify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.10 16.95 L 8.90 20.02 L 16.90 14.09 L 11.98 2.87 L 6.40 17.20 L 17.38 2.30" />
      <path d="M 14.37 11.23 L 10.56 19.31 L 15.73 16.36 L 7.41 18.68 L 12.73 17.48 L 21.07 4.58" />
      <path d="M 12.80 8.53 Q 2.31 7.38 13.86 21.76" />
      <path d="M 4.59 6.43 A 3.39 3.08 83 0 1 15.89 17.71" />
      <path d="M 15.40 2.25 Q 18.26 5.77 9.09 9.07" />
      <path d="M 4.10 16.54 A 2.17 4.70 137 0 0 15.97 14.09" />
      {children}
    </svg>
  );
});

export default StelloMagnify;

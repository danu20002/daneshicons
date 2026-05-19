import React from 'react';

export const iconData = {
  "id": "PeriShot",
  "name": "PeriShot",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 6.42 C 15.62 15.99, 5.88 15.63, 15.13 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 5.51 C 16.92 16.19, 8.10 5.73, 19.29 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 9.23 C 4.06 8.86, 16.40 17.74, 15.38 18.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 5.09 C 14.24 17.36, 14.09 11.74, 15.60 14.84"
      }
    ]
  ]
};

export const PeriShot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 6.42 C 15.62 15.99, 5.88 15.63, 15.13 15.01" />
      <path d="M 2.36 5.51 C 16.92 16.19, 8.10 5.73, 19.29 21.44" />
      <path d="M 5.98 9.23 C 4.06 8.86, 16.40 17.74, 15.38 18.62" />
      <path d="M 8.67 5.09 C 14.24 17.36, 14.09 11.74, 15.60 14.84" />
      {children}
    </svg>
  );
});

export default PeriShot;

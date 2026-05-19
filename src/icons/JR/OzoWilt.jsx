import React from 'react';

export const iconData = {
  "id": "OzoWilt",
  "name": "OzoWilt",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.76 12.00 Q 15.42 12.92 19.59 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 16.38 Q 14.50 14.50 16.38 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 16.38 19.59 Q 12.92 15.42 12.00 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.76 Q 11.08 15.42 7.62 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 19.59 Q 9.50 14.50 4.41 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 16.38 Q 8.58 12.92 3.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 12.00 Q 8.58 11.08 4.41 7.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 7.62 Q 9.50 9.50 7.62 4.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 4.41 Q 11.08 8.58 12.00 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.24 Q 12.92 8.58 16.38 4.41"
      }
    ],
    [
      "path",
      {
        "d": "M 16.38 4.41 Q 14.50 9.50 19.59 7.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 7.62 Q 15.42 11.08 20.76 12.00"
      }
    ]
  ]
};

export const OzoWilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.76 12.00 Q 15.42 12.92 19.59 16.38" />
      <path d="M 19.59 16.38 Q 14.50 14.50 16.38 19.59" />
      <path d="M 16.38 19.59 Q 12.92 15.42 12.00 20.76" />
      <path d="M 12.00 20.76 Q 11.08 15.42 7.62 19.59" />
      <path d="M 7.62 19.59 Q 9.50 14.50 4.41 16.38" />
      <path d="M 4.41 16.38 Q 8.58 12.92 3.24 12.00" />
      <path d="M 3.24 12.00 Q 8.58 11.08 4.41 7.62" />
      <path d="M 4.41 7.62 Q 9.50 9.50 7.62 4.41" />
      <path d="M 7.62 4.41 Q 11.08 8.58 12.00 3.24" />
      <path d="M 12.00 3.24 Q 12.92 8.58 16.38 4.41" />
      <path d="M 16.38 4.41 Q 14.50 9.50 19.59 7.62" />
      <path d="M 19.59 7.62 Q 15.42 11.08 20.76 12.00" />
      {children}
    </svg>
  );
});

export default OzoWilt;

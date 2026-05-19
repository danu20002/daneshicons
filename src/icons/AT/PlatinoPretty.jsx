import React from 'react';

export const iconData = {
  "id": "PlatinoPretty",
  "name": "PlatinoPretty",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 4.01 C 15.96 8.87, 7.62 17.03, 19.20 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 8.20 C 9.72 12.91, 6.40 6.81, 20.39 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 9.35 C 9.73 12.92, 5.18 13.67, 21.99 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 4.20 C 14.82 13.43, 11.87 9.21, 20.09 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 4.83 C 6.82 4.06, 18.62 11.42, 21.52 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 4.80 C 19.29 5.31, 17.96 16.60, 14.47 18.02"
      }
    ]
  ]
};

export const PlatinoPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 4.01 C 15.96 8.87, 7.62 17.03, 19.20 18.93" />
      <path d="M 8.32 8.20 C 9.72 12.91, 6.40 6.81, 20.39 19.44" />
      <path d="M 2.50 9.35 C 9.73 12.92, 5.18 13.67, 21.99 14.39" />
      <path d="M 4.16 4.20 C 14.82 13.43, 11.87 9.21, 20.09 14.85" />
      <path d="M 4.60 4.83 C 6.82 4.06, 18.62 11.42, 21.52 14.39" />
      <path d="M 6.78 4.80 C 19.29 5.31, 17.96 16.60, 14.47 18.02" />
      {children}
    </svg>
  );
});

export default PlatinoPretty;

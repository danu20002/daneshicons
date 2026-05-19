import React from 'react';

export const iconData = {
  "id": "FractoTend",
  "name": "FractoTend",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 7.12 C 9.34 17.22, 16.40 10.24, 16.20 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 5.00 C 17.79 11.67, 13.74 8.43, 19.82 16.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.81 C 8.23 17.03, 11.71 8.85, 21.55 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 5.47 C 11.11 19.20, 4.91 18.98, 20.13 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 4.98 C 11.10 4.21, 15.67 9.38, 19.16 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 9.28 C 6.89 17.09, 9.57 19.18, 19.81 17.74"
      }
    ]
  ]
};

export const FractoTend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 7.12 C 9.34 17.22, 16.40 10.24, 16.20 17.30" />
      <path d="M 6.92 5.00 C 17.79 11.67, 13.74 8.43, 19.82 16.93" />
      <path d="M 6.86 6.81 C 8.23 17.03, 11.71 8.85, 21.55 20.07" />
      <path d="M 9.41 5.47 C 11.11 19.20, 4.91 18.98, 20.13 19.82" />
      <path d="M 5.14 4.98 C 11.10 4.21, 15.67 9.38, 19.16 14.91" />
      <path d="M 6.34 9.28 C 6.89 17.09, 9.57 19.18, 19.81 17.74" />
      {children}
    </svg>
  );
});

export default FractoTend;

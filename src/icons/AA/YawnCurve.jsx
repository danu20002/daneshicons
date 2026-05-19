import React from 'react';

export const iconData = {
  "id": "YawnCurve",
  "name": "YawnCurve",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.02 6.51 C 16.74 6.96, 17.15 9.00, 16.57 20.48"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 9.36 C 9.09 7.76, 8.11 11.93, 17.24 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 5.22 C 16.59 8.77, 9.05 12.39, 14.90 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 2.10 9.66 C 16.36 9.88, 13.27 10.55, 14.84 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 8.26 C 16.06 11.43, 15.87 19.02, 18.04 15.71"
      }
    ]
  ]
};

export const YawnCurve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.02 6.51 C 16.74 6.96, 17.15 9.00, 16.57 20.48" />
      <path d="M 3.11 9.36 C 9.09 7.76, 8.11 11.93, 17.24 17.77" />
      <path d="M 5.90 5.22 C 16.59 8.77, 9.05 12.39, 14.90 14.54" />
      <path d="M 2.10 9.66 C 16.36 9.88, 13.27 10.55, 14.84 14.93" />
      <path d="M 9.40 8.26 C 16.06 11.43, 15.87 19.02, 18.04 15.71" />
      {children}
    </svg>
  );
});

export default YawnCurve;

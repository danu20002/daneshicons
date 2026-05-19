import React from 'react';

export const iconData = {
  "id": "ClaroEdge",
  "name": "ClaroEdge",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 9.11 C 16.18 12.66, 15.71 9.14, 14.81 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.57 9.97 C 9.86 16.47, 14.92 6.54, 20.95 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 9.25 C 7.82 8.12, 8.18 19.01, 16.21 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 2.98 C 18.79 14.85, 16.16 4.08, 19.68 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 5.29 C 19.60 15.83, 9.34 6.81, 16.58 14.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 4.44 C 10.98 5.31, 6.82 5.07, 18.82 19.07"
      }
    ]
  ]
};

export const ClaroEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 9.11 C 16.18 12.66, 15.71 9.14, 14.81 19.19" />
      <path d="M 9.57 9.97 C 9.86 16.47, 14.92 6.54, 20.95 18.06" />
      <path d="M 4.04 9.25 C 7.82 8.12, 8.18 19.01, 16.21 16.88" />
      <path d="M 9.04 2.98 C 18.79 14.85, 16.16 4.08, 19.68 18.38" />
      <path d="M 3.30 5.29 C 19.60 15.83, 9.34 6.81, 16.58 14.32" />
      <path d="M 9.04 4.44 C 10.98 5.31, 6.82 5.07, 18.82 19.07" />
      {children}
    </svg>
  );
});

export default ClaroEdge;

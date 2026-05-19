import React from 'react';

export const iconData = {
  "id": "VettoreGlen",
  "name": "VettoreGlen",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.34 7.61 C 15.14 17.20, 8.62 7.16, 16.88 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 2.20 C 14.81 8.60, 11.51 6.43, 17.77 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.83 5.73 C 8.80 12.59, 12.79 13.59, 19.93 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 7.98 C 16.60 5.22, 15.44 15.88, 16.09 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 9.82 C 11.10 12.88, 18.91 18.69, 15.59 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 8.14 C 4.92 17.51, 5.08 8.48, 17.52 17.39"
      }
    ]
  ]
};

export const VettoreGlen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.34 7.61 C 15.14 17.20, 8.62 7.16, 16.88 20.40" />
      <path d="M 5.15 2.20 C 14.81 8.60, 11.51 6.43, 17.77 18.16" />
      <path d="M 9.83 5.73 C 8.80 12.59, 12.79 13.59, 19.93 19.01" />
      <path d="M 7.05 7.98 C 16.60 5.22, 15.44 15.88, 16.09 15.01" />
      <path d="M 4.78 9.82 C 11.10 12.88, 18.91 18.69, 15.59 20.89" />
      <path d="M 4.46 8.14 C 4.92 17.51, 5.08 8.48, 17.52 17.39" />
      {children}
    </svg>
  );
});

export default VettoreGlen;

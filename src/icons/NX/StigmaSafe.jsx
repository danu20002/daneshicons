import React from 'react';

export const iconData = {
  "id": "StigmaSafe",
  "name": "StigmaSafe",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.41 7.95 C 13.82 8.38, 17.90 7.81, 19.10 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.55 9.11 C 9.84 14.01, 17.92 14.64, 20.20 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 8.48 C 10.30 6.35, 16.18 6.61, 17.78 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 6.16 C 14.98 4.17, 10.78 4.49, 19.76 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 3.98 C 5.81 6.25, 4.63 9.89, 14.49 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 2.59 C 15.85 13.50, 15.39 13.11, 17.59 21.62"
      }
    ]
  ]
};

export const StigmaSafe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.41 7.95 C 13.82 8.38, 17.90 7.81, 19.10 17.93" />
      <path d="M 9.55 9.11 C 9.84 14.01, 17.92 14.64, 20.20 20.58" />
      <path d="M 2.79 8.48 C 10.30 6.35, 16.18 6.61, 17.78 16.56" />
      <path d="M 7.65 6.16 C 14.98 4.17, 10.78 4.49, 19.76 19.66" />
      <path d="M 5.48 3.98 C 5.81 6.25, 4.63 9.89, 14.49 21.01" />
      <path d="M 3.95 2.59 C 15.85 13.50, 15.39 13.11, 17.59 21.62" />
      {children}
    </svg>
  );
});

export default StigmaSafe;

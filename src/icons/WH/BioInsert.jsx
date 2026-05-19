import React from 'react';

export const iconData = {
  "id": "BioInsert",
  "name": "BioInsert",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.74 12.00 a 9.26 9.26 0 1 0 18.53 0 a 9.26 9.26 0 1 0 -18.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 6.44 a 7.41 2.223236762322485 0 1 0 14.82 0 a 7.41 2.223236762322485 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.92 10.15 a 9.08 2.722897822543705 0 1 0 18.15 0 a 9.08 2.722897822543705 0 1 0 -18.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.92 13.85 a 9.08 2.722897822543705 0 1 0 18.15 0 a 9.08 2.722897822543705 0 1 0 -18.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 17.56 a 7.41 2.223236762322485 0 1 0 14.82 0 a 7.41 2.223236762322485 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 3.98 A 2 2 0 0 0 16.63 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 3.98 A 2 2 0 0 1 16.63 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 3.98 A 2 2 0 0 0 7.37 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 3.98 A 2 2 0 0 1 7.37 20.02"
      }
    ]
  ]
};

export const BioInsert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.74 12.00 a 9.26 9.26 0 1 0 18.53 0 a 9.26 9.26 0 1 0 -18.53 0" />
      <path d="M 4.59 6.44 a 7.41 2.223236762322485 0 1 0 14.82 0 a 7.41 2.223236762322485 0 1 0 -14.82 0" />
      <path d="M 2.92 10.15 a 9.08 2.722897822543705 0 1 0 18.15 0 a 9.08 2.722897822543705 0 1 0 -18.15 0" />
      <path d="M 2.92 13.85 a 9.08 2.722897822543705 0 1 0 18.15 0 a 9.08 2.722897822543705 0 1 0 -18.15 0" />
      <path d="M 4.59 17.56 a 7.41 2.223236762322485 0 1 0 14.82 0 a 7.41 2.223236762322485 0 1 0 -14.82 0" />
      <path d="M 16.63 3.98 A 2 2 0 0 0 16.63 20.02" />
      <path d="M 16.63 3.98 A 2 2 0 0 1 16.63 20.02" />
      <path d="M 7.37 3.98 A 2 2 0 0 0 7.37 20.02" />
      <path d="M 7.37 3.98 A 2 2 0 0 1 7.37 20.02" />
      {children}
    </svg>
  );
});

export default BioInsert;

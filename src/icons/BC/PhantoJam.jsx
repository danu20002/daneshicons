import React from 'react';

export const iconData = {
  "id": "PhantoJam",
  "name": "PhantoJam",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 12.00 a 9.71 9.71 0 1 0 19.41 0 a 9.71 9.71 0 1 0 -19.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 8.76 a 9.15 2.7453759108916023 0 1 0 18.30 0 a 9.15 2.7453759108916023 0 1 0 -18.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 15.24 a 9.15 2.7453759108916023 0 1 0 18.30 0 a 9.15 2.7453759108916023 0 1 0 -18.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 3.59 A 2 2 0 0 0 16.85 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 3.59 A 2 2 0 0 1 16.85 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 3.59 A 2 2 0 0 0 7.15 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 3.59 A 2 2 0 0 1 7.15 20.41"
      }
    ]
  ]
};

export const PhantoJam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 12.00 a 9.71 9.71 0 1 0 19.41 0 a 9.71 9.71 0 1 0 -19.41 0" />
      <path d="M 2.85 8.76 a 9.15 2.7453759108916023 0 1 0 18.30 0 a 9.15 2.7453759108916023 0 1 0 -18.30 0" />
      <path d="M 2.85 15.24 a 9.15 2.7453759108916023 0 1 0 18.30 0 a 9.15 2.7453759108916023 0 1 0 -18.30 0" />
      <path d="M 16.85 3.59 A 2 2 0 0 0 16.85 20.41" />
      <path d="M 16.85 3.59 A 2 2 0 0 1 16.85 20.41" />
      <path d="M 7.15 3.59 A 2 2 0 0 0 7.15 20.41" />
      <path d="M 7.15 3.59 A 2 2 0 0 1 7.15 20.41" />
      {children}
    </svg>
  );
});

export default PhantoJam;

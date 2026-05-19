import React from 'react';

export const iconData = {
  "id": "StalloGraze",
  "name": "StalloGraze",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.36 12.00 a 9.64 9.64 0 1 0 19.28 0 a 9.64 9.64 0 1 0 -19.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 8.79 a 9.09 2.72636875893346 0 1 0 18.18 0 a 9.09 2.72636875893346 0 1 0 -18.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 15.21 a 9.09 2.72636875893346 0 1 0 18.18 0 a 9.09 2.72636875893346 0 1 0 -18.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.82 3.65 A 2 2 0 0 0 16.82 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 16.82 3.65 A 2 2 0 0 1 16.82 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 3.65 A 2 2 0 0 0 7.18 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 3.65 A 2 2 0 0 1 7.18 20.35"
      }
    ]
  ]
};

export const StalloGraze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.36 12.00 a 9.64 9.64 0 1 0 19.28 0 a 9.64 9.64 0 1 0 -19.28 0" />
      <path d="M 2.91 8.79 a 9.09 2.72636875893346 0 1 0 18.18 0 a 9.09 2.72636875893346 0 1 0 -18.18 0" />
      <path d="M 2.91 15.21 a 9.09 2.72636875893346 0 1 0 18.18 0 a 9.09 2.72636875893346 0 1 0 -18.18 0" />
      <path d="M 16.82 3.65 A 2 2 0 0 0 16.82 20.35" />
      <path d="M 16.82 3.65 A 2 2 0 0 1 16.82 20.35" />
      <path d="M 7.18 3.65 A 2 2 0 0 0 7.18 20.35" />
      <path d="M 7.18 3.65 A 2 2 0 0 1 7.18 20.35" />
      {children}
    </svg>
  );
});

export default StalloGraze;

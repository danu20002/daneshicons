import React from 'react';

export const iconData = {
  "id": "TsunamDodo",
  "name": "TsunamDodo",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.61 0 a 8.31 8.31 0 1 0 -16.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 7.02 a 6.65 1.9936413517221807 0 1 0 13.29 0 a 6.65 1.9936413517221807 0 1 0 -13.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 10.34 a 8.14 2.4417020209159364 0 1 0 16.28 0 a 8.14 2.4417020209159364 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 13.66 a 8.14 2.4417020209159364 0 1 0 16.28 0 a 8.14 2.4417020209159364 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 16.98 a 6.65 1.9936413517221807 0 1 0 13.29 0 a 6.65 1.9936413517221807 0 1 0 -13.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 4.81 A 2 2 0 0 0 16.15 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 4.81 A 2 2 0 0 1 16.15 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.81 A 2 2 0 0 0 7.85 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.81 A 2 2 0 0 1 7.85 19.19"
      }
    ]
  ]
};

export const TsunamDodo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.61 0 a 8.31 8.31 0 1 0 -16.61 0" />
      <path d="M 5.35 7.02 a 6.65 1.9936413517221807 0 1 0 13.29 0 a 6.65 1.9936413517221807 0 1 0 -13.29 0" />
      <path d="M 3.86 10.34 a 8.14 2.4417020209159364 0 1 0 16.28 0 a 8.14 2.4417020209159364 0 1 0 -16.28 0" />
      <path d="M 3.86 13.66 a 8.14 2.4417020209159364 0 1 0 16.28 0 a 8.14 2.4417020209159364 0 1 0 -16.28 0" />
      <path d="M 5.35 16.98 a 6.65 1.9936413517221807 0 1 0 13.29 0 a 6.65 1.9936413517221807 0 1 0 -13.29 0" />
      <path d="M 16.15 4.81 A 2 2 0 0 0 16.15 19.19" />
      <path d="M 16.15 4.81 A 2 2 0 0 1 16.15 19.19" />
      <path d="M 7.85 4.81 A 2 2 0 0 0 7.85 19.19" />
      <path d="M 7.85 4.81 A 2 2 0 0 1 7.85 19.19" />
      {children}
    </svg>
  );
});

export default TsunamDodo;

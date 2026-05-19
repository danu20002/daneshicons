import React from 'react';

export const iconData = {
  "id": "ColoThird",
  "name": "ColoThird",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 12.00 a 9.40 9.40 0 1 0 18.79 0 a 9.40 9.40 0 1 0 -18.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 6.36 a 7.52 2.255116241276264 0 1 0 15.03 0 a 7.52 2.255116241276264 0 1 0 -15.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 10.12 a 9.21 2.761942050894982 0 1 0 18.41 0 a 9.21 2.761942050894982 0 1 0 -18.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 13.88 a 9.21 2.761942050894982 0 1 0 18.41 0 a 9.21 2.761942050894982 0 1 0 -18.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 17.64 a 7.52 2.2551162412762644 0 1 0 15.03 0 a 7.52 2.2551162412762644 0 1 0 -15.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 3.86 A 2 2 0 0 0 16.70 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 3.86 A 2 2 0 0 1 16.70 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 3.86 A 2 2 0 0 0 7.30 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 3.86 A 2 2 0 0 1 7.30 20.14"
      }
    ]
  ]
};

export const ColoThird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 12.00 a 9.40 9.40 0 1 0 18.79 0 a 9.40 9.40 0 1 0 -18.79 0" />
      <path d="M 4.48 6.36 a 7.52 2.255116241276264 0 1 0 15.03 0 a 7.52 2.255116241276264 0 1 0 -15.03 0" />
      <path d="M 2.79 10.12 a 9.21 2.761942050894982 0 1 0 18.41 0 a 9.21 2.761942050894982 0 1 0 -18.41 0" />
      <path d="M 2.79 13.88 a 9.21 2.761942050894982 0 1 0 18.41 0 a 9.21 2.761942050894982 0 1 0 -18.41 0" />
      <path d="M 4.48 17.64 a 7.52 2.2551162412762644 0 1 0 15.03 0 a 7.52 2.2551162412762644 0 1 0 -15.03 0" />
      <path d="M 16.70 3.86 A 2 2 0 0 0 16.70 20.14" />
      <path d="M 16.70 3.86 A 2 2 0 0 1 16.70 20.14" />
      <path d="M 7.30 3.86 A 2 2 0 0 0 7.30 20.14" />
      <path d="M 7.30 3.86 A 2 2 0 0 1 7.30 20.14" />
      {children}
    </svg>
  );
});

export default ColoThird;

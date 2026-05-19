import React from 'react';

export const iconData = {
  "id": "ZampognaFoliage",
  "name": "ZampognaFoliage",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.84 12.00 a 9.16 9.16 0 1 0 18.31 0 a 9.16 9.16 0 1 0 -18.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 6.51 a 7.32 2.1974491303414103 0 1 0 14.65 0 a 7.32 2.1974491303414103 0 1 0 -14.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 10.17 a 8.97 2.69131455252955 0 1 0 17.94 0 a 8.97 2.69131455252955 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 13.83 a 8.97 2.69131455252955 0 1 0 17.94 0 a 8.97 2.69131455252955 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 17.49 a 7.32 2.1974491303414103 0 1 0 14.65 0 a 7.32 2.1974491303414103 0 1 0 -14.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 4.07 A 2 2 0 0 0 16.58 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 4.07 A 2 2 0 0 1 16.58 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 4.07 A 2 2 0 0 0 7.42 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 4.07 A 2 2 0 0 1 7.42 19.93"
      }
    ]
  ]
};

export const ZampognaFoliage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.84 12.00 a 9.16 9.16 0 1 0 18.31 0 a 9.16 9.16 0 1 0 -18.31 0" />
      <path d="M 4.68 6.51 a 7.32 2.1974491303414103 0 1 0 14.65 0 a 7.32 2.1974491303414103 0 1 0 -14.65 0" />
      <path d="M 3.03 10.17 a 8.97 2.69131455252955 0 1 0 17.94 0 a 8.97 2.69131455252955 0 1 0 -17.94 0" />
      <path d="M 3.03 13.83 a 8.97 2.69131455252955 0 1 0 17.94 0 a 8.97 2.69131455252955 0 1 0 -17.94 0" />
      <path d="M 4.68 17.49 a 7.32 2.1974491303414103 0 1 0 14.65 0 a 7.32 2.1974491303414103 0 1 0 -14.65 0" />
      <path d="M 16.58 4.07 A 2 2 0 0 0 16.58 19.93" />
      <path d="M 16.58 4.07 A 2 2 0 0 1 16.58 19.93" />
      <path d="M 7.42 4.07 A 2 2 0 0 0 7.42 19.93" />
      <path d="M 7.42 4.07 A 2 2 0 0 1 7.42 19.93" />
      {children}
    </svg>
  );
});

export default ZampognaFoliage;

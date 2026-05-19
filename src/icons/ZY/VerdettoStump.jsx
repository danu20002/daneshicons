import React from 'react';

export const iconData = {
  "id": "VerdettoStump",
  "name": "VerdettoStump",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 8.64 0 1 0 17.27 0 a 8.64 8.64 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 2.591173952864483 0 1 0 17.27 0 a 8.64 2.591173952864483 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 4.52 A 2 2 0 0 0 16.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 16.32 4.52 A 2 2 0 0 1 16.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.52 A 2 2 0 0 0 7.68 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 4.52 A 2 2 0 0 1 7.68 19.48"
      }
    ]
  ]
};

export const VerdettoStump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 12.00 a 8.64 8.64 0 1 0 17.27 0 a 8.64 8.64 0 1 0 -17.27 0" />
      <path d="M 3.36 12.00 a 8.64 2.591173952864483 0 1 0 17.27 0 a 8.64 2.591173952864483 0 1 0 -17.27 0" />
      <path d="M 16.32 4.52 A 2 2 0 0 0 16.32 19.48" />
      <path d="M 16.32 4.52 A 2 2 0 0 1 16.32 19.48" />
      <path d="M 7.68 4.52 A 2 2 0 0 0 7.68 19.48" />
      <path d="M 7.68 4.52 A 2 2 0 0 1 7.68 19.48" />
      {children}
    </svg>
  );
});

export default VerdettoStump;

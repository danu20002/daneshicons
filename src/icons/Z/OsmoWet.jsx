import React from 'react';

export const iconData = {
  "id": "OsmoWet",
  "name": "OsmoWet",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 12.00 a 5.41 5.41 0 1 0 10.82 0 a 5.41 5.41 0 1 0 -10.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 12.00 a 6.81 6.81 0 1 0 13.62 0 a 6.81 6.81 0 1 0 -13.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0"
      }
    ]
  ]
};

export const OsmoWet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0" />
      <path d="M 6.59 12.00 a 5.41 5.41 0 1 0 10.82 0 a 5.41 5.41 0 1 0 -10.82 0" />
      <path d="M 5.19 12.00 a 6.81 6.81 0 1 0 13.62 0 a 6.81 6.81 0 1 0 -13.62 0" />
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0" />
      {children}
    </svg>
  );
});

export default OsmoWet;

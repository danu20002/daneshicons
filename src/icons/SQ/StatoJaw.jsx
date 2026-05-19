import React from 'react';

export const iconData = {
  "id": "StatoJaw",
  "name": "StatoJaw",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 12.00 a 9.87 9.87 0 1 0 19.75 0 a 9.87 9.87 0 1 0 -19.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 8.71 a 9.31 2.7926587808157706 0 1 0 18.62 0 a 9.31 2.7926587808157706 0 1 0 -18.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 15.29 a 9.31 2.79265878081577 0 1 0 18.62 0 a 9.31 2.79265878081577 0 1 0 -18.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 0 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 5.02 A 2 2 0 0 1 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.13 A 2 2 0 0 0 12.00 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.13 A 2 2 0 0 1 12.00 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 0 5.02 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 5.02 A 2 2 0 0 1 5.02 18.98"
      }
    ]
  ]
};

export const StatoJaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 12.00 a 9.87 9.87 0 1 0 19.75 0 a 9.87 9.87 0 1 0 -19.75 0" />
      <path d="M 2.69 8.71 a 9.31 2.7926587808157706 0 1 0 18.62 0 a 9.31 2.7926587808157706 0 1 0 -18.62 0" />
      <path d="M 2.69 15.29 a 9.31 2.79265878081577 0 1 0 18.62 0 a 9.31 2.79265878081577 0 1 0 -18.62 0" />
      <path d="M 18.98 5.02 A 2 2 0 0 0 18.98 18.98" />
      <path d="M 18.98 5.02 A 2 2 0 0 1 18.98 18.98" />
      <path d="M 12.00 2.13 A 2 2 0 0 0 12.00 21.87" />
      <path d="M 12.00 2.13 A 2 2 0 0 1 12.00 21.87" />
      <path d="M 5.02 5.02 A 2 2 0 0 0 5.02 18.98" />
      <path d="M 5.02 5.02 A 2 2 0 0 1 5.02 18.98" />
      {children}
    </svg>
  );
});

export default StatoJaw;

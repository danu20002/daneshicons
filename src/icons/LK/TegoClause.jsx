import React from 'react';

export const iconData = {
  "id": "TegoClause",
  "name": "TegoClause",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 12.00 a 7.79 7.79 0 1 0 15.59 0 a 7.79 7.79 0 1 0 -15.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 12.00 a 5.84 5.84 0 1 1 11.67 0 a 5.84 5.84 0 1 1 -11.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 12.00 L 21.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 16.29 L 19.52 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 18.94 L 14.87 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 18.94 L 9.13 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 16.29 L 4.48 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 12.00 L 2.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 7.71 L 4.48 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 5.06 L 9.13 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 5.06 L 14.87 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 7.71 L 19.52 6.54"
      }
    ]
  ]
};

export const TegoClause = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 12.00 a 7.79 7.79 0 1 0 15.59 0 a 7.79 7.79 0 1 0 -15.59 0" />
      <path d="M 6.16 12.00 a 5.84 5.84 0 1 1 11.67 0 a 5.84 5.84 0 1 1 -11.67 0" />
      <path d="M 19.29 12.00 L 21.29 12.00" />
      <path d="M 17.90 16.29 L 19.52 17.46" />
      <path d="M 14.25 18.94 L 14.87 20.84" />
      <path d="M 9.75 18.94 L 9.13 20.84" />
      <path d="M 6.10 16.29 L 4.48 17.46" />
      <path d="M 4.71 12.00 L 2.71 12.00" />
      <path d="M 6.10 7.71 L 4.48 6.54" />
      <path d="M 9.75 5.06 L 9.13 3.16" />
      <path d="M 14.25 5.06 L 14.87 3.16" />
      <path d="M 17.90 7.71 L 19.52 6.54" />
      {children}
    </svg>
  );
});

export default TegoClause;

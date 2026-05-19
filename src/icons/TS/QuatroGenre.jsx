import React from 'react';

export const iconData = {
  "id": "QuatroGenre",
  "name": "QuatroGenre",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.23 0 a 2.12 2.12 0 1 0 -4.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 0 9.81 0 a 4.90 4.90 0 1 0 -9.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0"
      }
    ]
  ]
};

export const QuatroGenre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.23 0 a 2.12 2.12 0 1 0 -4.23 0" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 0 9.81 0 a 4.90 4.90 0 1 0 -9.81 0" />
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.71 0 a 7.36 7.36 0 1 0 -14.71 0" />
      {children}
    </svg>
  );
});

export default QuatroGenre;

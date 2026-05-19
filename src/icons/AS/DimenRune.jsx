import React from 'react';

export const iconData = {
  "id": "DimenRune",
  "name": "DimenRune",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 12.00 a 3.92 3.92 0 1 0 7.84 0 a 3.92 3.92 0 1 0 -7.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 0 10.88 0 a 5.44 5.44 0 1 0 -10.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.59 0 a 7.30 7.30 0 1 0 -14.59 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0"
      }
    ]
  ]
};

export const DimenRune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0" />
      <path d="M 8.08 12.00 a 3.92 3.92 0 1 0 7.84 0 a 3.92 3.92 0 1 0 -7.84 0" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 0 10.88 0 a 5.44 5.44 0 1 0 -10.88 0" />
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.59 0 a 7.30 7.30 0 1 0 -14.59 0" stroke-dasharray="4 3" />
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0" />
      {children}
    </svg>
  );
});

export default DimenRune;

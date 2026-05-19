import React from 'react';

export const iconData = {
  "id": "TaureLip",
  "name": "TaureLip",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.22 20.35 A 5.99 2.61 135 0 0 3.78 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 18.44 14.30 A 6.64 2.79 173 0 1 12.03 9.66"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 8.11 Q 16.25 2.77 3.14 4.71"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 18.11 L 20.94 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.38 18.13 Q 3.80 9.23 21.45 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 3.78 A 2.88 6.07 145 0 1 4.56 12.28"
      }
    ]
  ]
};

export const TaureLip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.22 20.35 A 5.99 2.61 135 0 0 3.78 18.08" />
      <path d="M 18.44 14.30 A 6.64 2.79 173 0 1 12.03 9.66" />
      <path d="M 20.59 8.11 Q 16.25 2.77 3.14 4.71" />
      <path d="M 7.51 18.11 L 20.94 6.15" />
      <path d="M 2.38 18.13 Q 3.80 9.23 21.45 19.96" />
      <path d="M 6.81 3.78 A 2.88 6.07 145 0 1 4.56 12.28" />
      {children}
    </svg>
  );
});

export default TaureLip;

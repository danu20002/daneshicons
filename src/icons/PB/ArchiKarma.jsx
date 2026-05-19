import React from 'react';

export const iconData = {
  "id": "ArchiKarma",
  "name": "ArchiKarma",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.12 12.00 a 7.88 7.88 0 1 0 15.75 0 a 7.88 7.88 0 1 0 -15.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 12.00 a 5.96 5.96 0 1 1 11.91 0 a 5.96 5.96 0 1 1 -11.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 12.00 L 21.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 17.77 L 17.85 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 19.19 L 9.91 21.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 15.20 L 3.55 16.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 8.80 L 3.55 7.93"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 4.81 L 9.91 2.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 6.23 L 17.85 4.67"
      }
    ]
  ]
};

export const ArchiKarma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.12 12.00 a 7.88 7.88 0 1 0 15.75 0 a 7.88 7.88 0 1 0 -15.75 0" />
      <path d="M 6.04 12.00 a 5.96 5.96 0 1 1 11.91 0 a 5.96 5.96 0 1 1 -11.91 0" />
      <path d="M 19.38 12.00 L 21.38 12.00" />
      <path d="M 16.60 17.77 L 17.85 19.33" />
      <path d="M 10.36 19.19 L 9.91 21.14" />
      <path d="M 5.35 15.20 L 3.55 16.07" />
      <path d="M 5.35 8.80 L 3.55 7.93" />
      <path d="M 10.36 4.81 L 9.91 2.86" />
      <path d="M 16.60 6.23 L 17.85 4.67" />
      {children}
    </svg>
  );
});

export default ArchiKarma;

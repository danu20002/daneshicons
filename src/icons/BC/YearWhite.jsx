import React from 'react';

export const iconData = {
  "id": "YearWhite",
  "name": "YearWhite",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 8.90 a 8.77 2.630037241437066 0 1 0 17.53 0 a 8.77 2.630037241437066 0 1 0 -17.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 15.10 a 8.77 2.630037241437066 0 1 0 17.53 0 a 8.77 2.630037241437066 0 1 0 -17.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 5.42 A 2 2 0 0 0 18.58 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 5.42 A 2 2 0 0 1 18.58 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.70 A 2 2 0 0 0 12.00 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.70 A 2 2 0 0 1 12.00 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 5.42 A 2 2 0 0 0 5.42 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 5.42 A 2 2 0 0 1 5.42 18.58"
      }
    ]
  ]
};

export const YearWhite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.70 12.00 a 9.30 9.30 0 1 0 18.60 0 a 9.30 9.30 0 1 0 -18.60 0" />
      <path d="M 3.23 8.90 a 8.77 2.630037241437066 0 1 0 17.53 0 a 8.77 2.630037241437066 0 1 0 -17.53 0" />
      <path d="M 3.23 15.10 a 8.77 2.630037241437066 0 1 0 17.53 0 a 8.77 2.630037241437066 0 1 0 -17.53 0" />
      <path d="M 18.58 5.42 A 2 2 0 0 0 18.58 18.58" />
      <path d="M 18.58 5.42 A 2 2 0 0 1 18.58 18.58" />
      <path d="M 12.00 2.70 A 2 2 0 0 0 12.00 21.30" />
      <path d="M 12.00 2.70 A 2 2 0 0 1 12.00 21.30" />
      <path d="M 5.42 5.42 A 2 2 0 0 0 5.42 18.58" />
      <path d="M 5.42 5.42 A 2 2 0 0 1 5.42 18.58" />
      {children}
    </svg>
  );
});

export default YearWhite;

import React from 'react';

export const iconData = {
  "id": "VisieraEnforce",
  "name": "VisieraEnforce",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 12.00 a 7.65 7.65 0 1 0 15.31 0 a 7.65 7.65 0 1 0 -15.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 12.00 a 4.92 4.92 0 1 1 9.84 0 a 4.92 4.92 0 1 1 -9.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 12.00 L 21.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 16.60 L 19.01 17.88"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 19.04 L 13.59 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 18.20 L 7.42 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 14.45 L 3.40 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 9.55 L 3.40 8.87"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 5.80 L 7.42 4.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 4.96 L 13.59 2.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 7.40 L 19.01 6.12"
      }
    ]
  ]
};

export const VisieraEnforce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 12.00 a 7.65 7.65 0 1 0 15.31 0 a 7.65 7.65 0 1 0 -15.31 0" />
      <path d="M 7.08 12.00 a 4.92 4.92 0 1 1 9.84 0 a 4.92 4.92 0 1 1 -9.84 0" />
      <path d="M 19.15 12.00 L 21.15 12.00" />
      <path d="M 17.48 16.60 L 19.01 17.88" />
      <path d="M 13.24 19.04 L 13.59 21.01" />
      <path d="M 8.42 18.20 L 7.42 19.93" />
      <path d="M 5.28 14.45 L 3.40 15.13" />
      <path d="M 5.28 9.55 L 3.40 8.87" />
      <path d="M 8.42 5.80 L 7.42 4.07" />
      <path d="M 13.24 4.96 L 13.59 2.99" />
      <path d="M 17.48 7.40 L 19.01 6.12" />
      {children}
    </svg>
  );
});

export default VisieraEnforce;

import React from 'react';

export const iconData = {
  "id": "SyndesmoHere",
  "name": "SyndesmoHere",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.01 12.00 Q 15.03 12.81 19.80 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 16.50 Q 14.22 14.22 16.50 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 19.80 Q 12.81 15.03 12.00 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.01 Q 11.19 15.03 7.50 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 19.80 Q 9.78 14.22 4.20 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 16.50 Q 8.97 12.81 2.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 12.00 Q 8.97 11.19 4.20 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 7.50 Q 9.78 9.78 7.50 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 4.20 Q 11.19 8.97 12.00 2.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.99 Q 12.81 8.97 16.50 4.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 4.20 Q 14.22 9.78 19.80 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 7.50 Q 15.03 11.19 21.01 12.00"
      }
    ]
  ]
};

export const SyndesmoHere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.01 12.00 Q 15.03 12.81 19.80 16.50" />
      <path d="M 19.80 16.50 Q 14.22 14.22 16.50 19.80" />
      <path d="M 16.50 19.80 Q 12.81 15.03 12.00 21.01" />
      <path d="M 12.00 21.01 Q 11.19 15.03 7.50 19.80" />
      <path d="M 7.50 19.80 Q 9.78 14.22 4.20 16.50" />
      <path d="M 4.20 16.50 Q 8.97 12.81 2.99 12.00" />
      <path d="M 2.99 12.00 Q 8.97 11.19 4.20 7.50" />
      <path d="M 4.20 7.50 Q 9.78 9.78 7.50 4.20" />
      <path d="M 7.50 4.20 Q 11.19 8.97 12.00 2.99" />
      <path d="M 12.00 2.99 Q 12.81 8.97 16.50 4.20" />
      <path d="M 16.50 4.20 Q 14.22 9.78 19.80 7.50" />
      <path d="M 19.80 7.50 Q 15.03 11.19 21.01 12.00" />
      {children}
    </svg>
  );
});

export default SyndesmoHere;

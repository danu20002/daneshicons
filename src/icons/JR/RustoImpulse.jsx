import React from 'react';

export const iconData = {
  "id": "RustoImpulse",
  "name": "RustoImpulse",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.40 12.00 Q 15.28 12.88 20.14 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 16.70 Q 14.40 14.40 16.70 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 20.14 Q 12.88 15.28 12.00 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.40 Q 11.12 15.28 7.30 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 20.14 Q 9.60 14.40 3.86 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 16.70 Q 8.72 12.88 2.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 12.00 Q 8.72 11.12 3.86 7.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 7.30 Q 9.60 9.60 7.30 3.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 3.86 Q 11.12 8.72 12.00 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.60 Q 12.88 8.72 16.70 3.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 3.86 Q 14.40 9.60 20.14 7.30"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 7.30 Q 15.28 11.12 21.40 12.00"
      }
    ]
  ]
};

export const RustoImpulse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.40 12.00 Q 15.28 12.88 20.14 16.70" />
      <path d="M 20.14 16.70 Q 14.40 14.40 16.70 20.14" />
      <path d="M 16.70 20.14 Q 12.88 15.28 12.00 21.40" />
      <path d="M 12.00 21.40 Q 11.12 15.28 7.30 20.14" />
      <path d="M 7.30 20.14 Q 9.60 14.40 3.86 16.70" />
      <path d="M 3.86 16.70 Q 8.72 12.88 2.60 12.00" />
      <path d="M 2.60 12.00 Q 8.72 11.12 3.86 7.30" />
      <path d="M 3.86 7.30 Q 9.60 9.60 7.30 3.86" />
      <path d="M 7.30 3.86 Q 11.12 8.72 12.00 2.60" />
      <path d="M 12.00 2.60 Q 12.88 8.72 16.70 3.86" />
      <path d="M 16.70 3.86 Q 14.40 9.60 20.14 7.30" />
      <path d="M 20.14 7.30 Q 15.28 11.12 21.40 12.00" />
      {children}
    </svg>
  );
});

export default RustoImpulse;

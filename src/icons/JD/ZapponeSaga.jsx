import React from 'react';

export const iconData = {
  "id": "ZapponeSaga",
  "name": "ZapponeSaga",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 6.68 a 7.10 2.129133042767644 0 1 0 14.19 0 a 7.10 2.129133042767644 0 1 0 -14.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 10.23 a 8.69 2.607644774640041 0 1 0 17.38 0 a 8.69 2.607644774640041 0 1 0 -17.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 13.77 a 8.69 2.607644774640041 0 1 0 17.38 0 a 8.69 2.607644774640041 0 1 0 -17.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 17.32 a 7.10 2.1291330427676436 0 1 0 14.19 0 a 7.10 2.1291330427676436 0 1 0 -14.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 4.32 A 2 2 0 0 0 16.44 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 4.32 A 2 2 0 0 1 16.44 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 4.32 A 2 2 0 0 0 7.56 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 4.32 A 2 2 0 0 1 7.56 19.68"
      }
    ]
  ]
};

export const ZapponeSaga = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      <path d="M 4.90 6.68 a 7.10 2.129133042767644 0 1 0 14.19 0 a 7.10 2.129133042767644 0 1 0 -14.19 0" />
      <path d="M 3.31 10.23 a 8.69 2.607644774640041 0 1 0 17.38 0 a 8.69 2.607644774640041 0 1 0 -17.38 0" />
      <path d="M 3.31 13.77 a 8.69 2.607644774640041 0 1 0 17.38 0 a 8.69 2.607644774640041 0 1 0 -17.38 0" />
      <path d="M 4.90 17.32 a 7.10 2.1291330427676436 0 1 0 14.19 0 a 7.10 2.1291330427676436 0 1 0 -14.19 0" />
      <path d="M 16.44 4.32 A 2 2 0 0 0 16.44 19.68" />
      <path d="M 16.44 4.32 A 2 2 0 0 1 16.44 19.68" />
      <path d="M 7.56 4.32 A 2 2 0 0 0 7.56 19.68" />
      <path d="M 7.56 4.32 A 2 2 0 0 1 7.56 19.68" />
      {children}
    </svg>
  );
});

export default ZapponeSaga;

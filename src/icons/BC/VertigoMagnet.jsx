import React from 'react';

export const iconData = {
  "id": "VertigoMagnet",
  "name": "VertigoMagnet",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.32 0 a 8.66 8.66 0 1 0 -17.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 9.11 a 8.16 2.4494755639515584 0 1 0 16.33 0 a 8.16 2.4494755639515584 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 14.89 a 8.16 2.4494755639515584 0 1 0 16.33 0 a 8.16 2.4494755639515584 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 5.88 A 2 2 0 0 0 18.12 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 5.88 A 2 2 0 0 1 18.12 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.34 A 2 2 0 0 0 12.00 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.34 A 2 2 0 0 1 12.00 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 5.88 A 2 2 0 0 0 5.88 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 5.88 A 2 2 0 0 1 5.88 18.12"
      }
    ]
  ]
};

export const VertigoMagnet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.32 0 a 8.66 8.66 0 1 0 -17.32 0" />
      <path d="M 3.84 9.11 a 8.16 2.4494755639515584 0 1 0 16.33 0 a 8.16 2.4494755639515584 0 1 0 -16.33 0" />
      <path d="M 3.84 14.89 a 8.16 2.4494755639515584 0 1 0 16.33 0 a 8.16 2.4494755639515584 0 1 0 -16.33 0" />
      <path d="M 18.12 5.88 A 2 2 0 0 0 18.12 18.12" />
      <path d="M 18.12 5.88 A 2 2 0 0 1 18.12 18.12" />
      <path d="M 12.00 3.34 A 2 2 0 0 0 12.00 20.66" />
      <path d="M 12.00 3.34 A 2 2 0 0 1 12.00 20.66" />
      <path d="M 5.88 5.88 A 2 2 0 0 0 5.88 18.12" />
      <path d="M 5.88 5.88 A 2 2 0 0 1 5.88 18.12" />
      {children}
    </svg>
  );
});

export default VertigoMagnet;

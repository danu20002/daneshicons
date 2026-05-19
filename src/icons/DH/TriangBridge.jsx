import React from 'react';

export const iconData = {
  "id": "TriangBridge",
  "name": "TriangBridge",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.16 12.00 a 9.84 9.84 0 1 0 19.68 0 a 9.84 9.84 0 1 0 -19.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 8.72 a 9.28 2.782984973649709 0 1 0 18.55 0 a 9.28 2.782984973649709 0 1 0 -18.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 15.28 a 9.28 2.782984973649709 0 1 0 18.55 0 a 9.28 2.782984973649709 0 1 0 -18.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 5.04 A 2 2 0 0 0 18.96 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 5.04 A 2 2 0 0 1 18.96 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.16 A 2 2 0 0 0 12.00 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.16 A 2 2 0 0 1 12.00 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 5.04 A 2 2 0 0 0 5.04 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 5.04 A 2 2 0 0 1 5.04 18.96"
      }
    ]
  ]
};

export const TriangBridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.16 12.00 a 9.84 9.84 0 1 0 19.68 0 a 9.84 9.84 0 1 0 -19.68 0" />
      <path d="M 2.72 8.72 a 9.28 2.782984973649709 0 1 0 18.55 0 a 9.28 2.782984973649709 0 1 0 -18.55 0" />
      <path d="M 2.72 15.28 a 9.28 2.782984973649709 0 1 0 18.55 0 a 9.28 2.782984973649709 0 1 0 -18.55 0" />
      <path d="M 18.96 5.04 A 2 2 0 0 0 18.96 18.96" />
      <path d="M 18.96 5.04 A 2 2 0 0 1 18.96 18.96" />
      <path d="M 12.00 2.16 A 2 2 0 0 0 12.00 21.84" />
      <path d="M 12.00 2.16 A 2 2 0 0 1 12.00 21.84" />
      <path d="M 5.04 5.04 A 2 2 0 0 0 5.04 18.96" />
      <path d="M 5.04 5.04 A 2 2 0 0 1 5.04 18.96" />
      {children}
    </svg>
  );
});

export default TriangBridge;

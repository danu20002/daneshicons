import React from 'react';

export const iconData = {
  "id": "TurbinoShell",
  "name": "TurbinoShell",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 12.00 a 5.16 5.16 0 1 1 10.33 0 a 5.16 5.16 0 1 1 -10.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 12.00 L 20.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 15.87 L 18.94 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 14.03 18.26 L 14.65 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 18.26 L 9.35 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 15.87 L 5.06 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 12.00 L 3.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 8.13 L 5.06 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 5.74 L 9.35 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 14.03 5.74 L 14.65 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 8.13 L 18.94 6.96"
      }
    ]
  ]
};

export const TurbinoShell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0" />
      <path d="M 6.84 12.00 a 5.16 5.16 0 1 1 10.33 0 a 5.16 5.16 0 1 1 -10.33 0" />
      <path d="M 18.58 12.00 L 20.58 12.00" />
      <path d="M 17.33 15.87 L 18.94 17.04" />
      <path d="M 14.03 18.26 L 14.65 20.16" />
      <path d="M 9.97 18.26 L 9.35 20.16" />
      <path d="M 6.67 15.87 L 5.06 17.04" />
      <path d="M 5.42 12.00 L 3.42 12.00" />
      <path d="M 6.67 8.13 L 5.06 6.96" />
      <path d="M 9.97 5.74 L 9.35 3.84" />
      <path d="M 14.03 5.74 L 14.65 3.84" />
      <path d="M 17.33 8.13 L 18.94 6.96" />
      {children}
    </svg>
  );
});

export default TurbinoShell;

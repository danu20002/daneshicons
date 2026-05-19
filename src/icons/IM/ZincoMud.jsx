import React from 'react';

export const iconData = {
  "id": "ZincoMud",
  "name": "ZincoMud",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.42 12.00 L 22.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.25 18.59 L 18.50 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 20.21 L 9.68 22.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 15.66 L 2.61 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 8.34 L 2.61 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 3.79 L 9.68 1.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.25 5.41 L 18.50 3.85"
      }
    ]
  ]
};

export const ZincoMud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0" />
      <path d="M 20.42 12.00 L 22.42 12.00" />
      <path d="M 17.25 18.59 L 18.50 20.15" />
      <path d="M 10.13 20.21 L 9.68 22.16" />
      <path d="M 4.41 15.66 L 2.61 16.52" />
      <path d="M 4.41 8.34 L 2.61 7.48" />
      <path d="M 10.13 3.79 L 9.68 1.84" />
      <path d="M 17.25 5.41 L 18.50 3.85" />
      {children}
    </svg>
  );
});

export default ZincoMud;

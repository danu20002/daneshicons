import React from 'react';

export const iconData = {
  "id": "VeronicaBox",
  "name": "VeronicaBox",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 12.00 a 4.08 4.08 0 1 0 8.15 0 a 4.08 4.08 0 1 0 -8.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.30 0 a 6.15 6.15 0 1 0 -12.30 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 8.49 0 1 0 16.97 0 a 8.49 8.49 0 1 0 -16.97 0"
      }
    ]
  ]
};

export const VeronicaBox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0" />
      <path d="M 7.92 12.00 a 4.08 4.08 0 1 0 8.15 0 a 4.08 4.08 0 1 0 -8.15 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.30 0 a 6.15 6.15 0 1 0 -12.30 0" stroke-dasharray="4 1" />
      <path d="M 3.51 12.00 a 8.49 8.49 0 1 0 16.97 0 a 8.49 8.49 0 1 0 -16.97 0" />
      {children}
    </svg>
  );
});

export default VeronicaBox;

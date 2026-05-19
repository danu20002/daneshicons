import React from 'react';

export const iconData = {
  "id": "ViveriPiston",
  "name": "ViveriPiston",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.77 20.53 L 5.80 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.13 3.92 A 3.92 6.94 71 0 1 16.50 12.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.57 9.19 A 6.33 6.09 131 0 0 17.20 8.82"
      }
    ],
    [
      "path",
      {
        "d": "M 21.09 10.82 L 13.96 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 16.32 Q 7.26 4.71 17.31 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 8.83 C 4.85 15.87, 17.69 15.60, 13.35 7.99"
      }
    ]
  ]
};

export const ViveriPiston = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.77 20.53 L 5.80 17.21" />
      <path d="M 9.13 3.92 A 3.92 6.94 71 0 1 16.50 12.28" />
      <path d="M 19.57 9.19 A 6.33 6.09 131 0 0 17.20 8.82" />
      <path d="M 21.09 10.82 L 13.96 5.57" />
      <path d="M 3.21 16.32 Q 7.26 4.71 17.31 15.95" />
      <path d="M 20.24 8.83 C 4.85 15.87, 17.69 15.60, 13.35 7.99" />
      {children}
    </svg>
  );
});

export default ViveriPiston;

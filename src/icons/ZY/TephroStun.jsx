import React from 'react';

export const iconData = {
  "id": "TephroStun",
  "name": "TephroStun",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 8.35 0 1 0 16.70 0 a 8.35 8.35 0 1 0 -16.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 2.504794513201341 0 1 0 16.70 0 a 8.35 2.504794513201341 0 1 0 -16.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 6.10 A 2 2 0 0 0 17.90 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 6.10 A 2 2 0 0 1 17.90 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.65 A 2 2 0 0 0 12.00 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.65 A 2 2 0 0 1 12.00 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 6.10 A 2 2 0 0 0 6.10 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 6.10 A 2 2 0 0 1 6.10 17.90"
      }
    ]
  ]
};

export const TephroStun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 12.00 a 8.35 8.35 0 1 0 16.70 0 a 8.35 8.35 0 1 0 -16.70 0" />
      <path d="M 3.65 12.00 a 8.35 2.504794513201341 0 1 0 16.70 0 a 8.35 2.504794513201341 0 1 0 -16.70 0" />
      <path d="M 17.90 6.10 A 2 2 0 0 0 17.90 17.90" />
      <path d="M 17.90 6.10 A 2 2 0 0 1 17.90 17.90" />
      <path d="M 12.00 3.65 A 2 2 0 0 0 12.00 20.35" />
      <path d="M 12.00 3.65 A 2 2 0 0 1 12.00 20.35" />
      <path d="M 6.10 6.10 A 2 2 0 0 0 6.10 17.90" />
      <path d="M 6.10 6.10 A 2 2 0 0 1 6.10 17.90" />
      {children}
    </svg>
  );
});

export default TephroStun;

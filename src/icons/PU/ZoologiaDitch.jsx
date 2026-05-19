import React from 'react';

export const iconData = {
  "id": "ZoologiaDitch",
  "name": "ZoologiaDitch",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 12.00 a 5.52 5.52 0 1 1 11.04 0 a 5.52 5.52 0 1 1 -11.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 12.00 L 21.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 16.16 L 19.34 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 18.73 L 14.80 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 18.73 L 9.20 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 16.16 L 4.66 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 L 2.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 7.84 L 4.66 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 5.27 L 9.20 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 5.27 L 14.80 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 7.84 L 19.34 6.67"
      }
    ]
  ]
};

export const ZoologiaDitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0" />
      <path d="M 6.48 12.00 a 5.52 5.52 0 1 1 11.04 0 a 5.52 5.52 0 1 1 -11.04 0" />
      <path d="M 19.07 12.00 L 21.07 12.00" />
      <path d="M 17.72 16.16 L 19.34 17.33" />
      <path d="M 14.19 18.73 L 14.80 20.63" />
      <path d="M 9.81 18.73 L 9.20 20.63" />
      <path d="M 6.28 16.16 L 4.66 17.33" />
      <path d="M 4.93 12.00 L 2.93 12.00" />
      <path d="M 6.28 7.84 L 4.66 6.67" />
      <path d="M 9.81 5.27 L 9.20 3.37" />
      <path d="M 14.19 5.27 L 14.80 3.37" />
      <path d="M 17.72 7.84 L 19.34 6.67" />
      {children}
    </svg>
  );
});

export default ZoologiaDitch;

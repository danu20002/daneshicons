import React from 'react';

export const iconData = {
  "id": "PaliBraid",
  "name": "PaliBraid",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 12.00 a 5.93 5.93 0 1 1 11.86 0 a 5.93 5.93 0 1 1 -11.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 12.00 L 21.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.78 17.99 L 18.02 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 19.47 L 9.85 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 15.32 L 3.30 16.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 8.68 L 3.30 7.81"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 4.53 L 9.85 2.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.78 6.01 L 18.02 4.45"
      }
    ]
  ]
};

export const PaliBraid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0" />
      <path d="M 6.07 12.00 a 5.93 5.93 0 1 1 11.86 0 a 5.93 5.93 0 1 1 -11.86 0" />
      <path d="M 19.66 12.00 L 21.66 12.00" />
      <path d="M 16.78 17.99 L 18.02 19.55" />
      <path d="M 10.30 19.47 L 9.85 21.42" />
      <path d="M 5.10 15.32 L 3.30 16.19" />
      <path d="M 5.10 8.68 L 3.30 7.81" />
      <path d="M 10.30 4.53 L 9.85 2.58" />
      <path d="M 16.78 6.01 L 18.02 4.45" />
      {children}
    </svg>
  );
});

export default PaliBraid;

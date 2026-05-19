import React from 'react';

export const iconData = {
  "id": "OnyxLitter",
  "name": "OnyxLitter",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 12.00 L 21.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 16.24 L 19.46 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 18.87 L 14.85 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 18.87 L 9.15 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 16.24 L 4.54 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 L 2.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 7.76 L 4.54 6.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 5.13 L 9.15 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 14.23 5.13 L 14.85 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 7.76 L 19.46 6.58"
      }
    ]
  ]
};

export const OnyxLitter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" />
      <path d="M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0" />
      <path d="M 19.22 12.00 L 21.22 12.00" />
      <path d="M 17.84 16.24 L 19.46 17.42" />
      <path d="M 14.23 18.87 L 14.85 20.77" />
      <path d="M 9.77 18.87 L 9.15 20.77" />
      <path d="M 6.16 16.24 L 4.54 17.42" />
      <path d="M 4.78 12.00 L 2.78 12.00" />
      <path d="M 6.16 7.76 L 4.54 6.58" />
      <path d="M 9.77 5.13 L 9.15 3.23" />
      <path d="M 14.23 5.13 L 14.85 3.23" />
      <path d="M 17.84 7.76 L 19.46 6.58" />
      {children}
    </svg>
  );
});

export default OnyxLitter;

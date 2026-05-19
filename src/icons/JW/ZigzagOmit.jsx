import React from 'react';

export const iconData = {
  "id": "ZigzagOmit",
  "name": "ZigzagOmit",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 9.09 a 8.22 2.4654730631947706 0 1 0 16.44 0 a 8.22 2.4654730631947706 0 1 0 -16.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 14.91 a 8.22 2.4654730631947706 0 1 0 16.44 0 a 8.22 2.4654730631947706 0 1 0 -16.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 5.84 A 2 2 0 0 0 18.16 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 18.16 5.84 A 2 2 0 0 1 18.16 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.28 A 2 2 0 0 0 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.28 A 2 2 0 0 1 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 5.84 A 2 2 0 0 0 5.84 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 5.84 A 2 2 0 0 1 5.84 18.16"
      }
    ]
  ]
};

export const ZigzagOmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0" />
      <path d="M 3.78 9.09 a 8.22 2.4654730631947706 0 1 0 16.44 0 a 8.22 2.4654730631947706 0 1 0 -16.44 0" />
      <path d="M 3.78 14.91 a 8.22 2.4654730631947706 0 1 0 16.44 0 a 8.22 2.4654730631947706 0 1 0 -16.44 0" />
      <path d="M 18.16 5.84 A 2 2 0 0 0 18.16 18.16" />
      <path d="M 18.16 5.84 A 2 2 0 0 1 18.16 18.16" />
      <path d="M 12.00 3.28 A 2 2 0 0 0 12.00 20.72" />
      <path d="M 12.00 3.28 A 2 2 0 0 1 12.00 20.72" />
      <path d="M 5.84 5.84 A 2 2 0 0 0 5.84 18.16" />
      <path d="M 5.84 5.84 A 2 2 0 0 1 5.84 18.16" />
      {children}
    </svg>
  );
});

export default ZigzagOmit;

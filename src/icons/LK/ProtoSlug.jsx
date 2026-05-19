import React from 'react';

export const iconData = {
  "id": "ProtoSlug",
  "name": "ProtoSlug",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 12.00 a 7.65 7.65 0 1 0 15.31 0 a 7.65 7.65 0 1 0 -15.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.26 12.00 a 4.74 4.74 0 1 1 9.48 0 a 4.74 4.74 0 1 1 -9.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 12.00 L 21.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.20 15.58 L 19.93 16.58"
      }
    ],
    [
      "path",
      {
        "d": "M 15.58 18.20 L 16.58 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.15 L 12.00 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 18.20 L 7.42 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 15.58 L 4.07 16.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 12.00 L 2.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 8.42 L 4.07 7.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 5.80 L 7.42 4.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.85 L 12.00 2.85"
      }
    ],
    [
      "path",
      {
        "d": "M 15.58 5.80 L 16.58 4.07"
      }
    ],
    [
      "path",
      {
        "d": "M 18.20 8.42 L 19.93 7.42"
      }
    ]
  ]
};

export const ProtoSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 12.00 a 7.65 7.65 0 1 0 15.31 0 a 7.65 7.65 0 1 0 -15.31 0" />
      <path d="M 7.26 12.00 a 4.74 4.74 0 1 1 9.48 0 a 4.74 4.74 0 1 1 -9.48 0" />
      <path d="M 19.15 12.00 L 21.15 12.00" />
      <path d="M 18.20 15.58 L 19.93 16.58" />
      <path d="M 15.58 18.20 L 16.58 19.93" />
      <path d="M 12.00 19.15 L 12.00 21.15" />
      <path d="M 8.42 18.20 L 7.42 19.93" />
      <path d="M 5.80 15.58 L 4.07 16.58" />
      <path d="M 4.85 12.00 L 2.85 12.00" />
      <path d="M 5.80 8.42 L 4.07 7.42" />
      <path d="M 8.42 5.80 L 7.42 4.07" />
      <path d="M 12.00 4.85 L 12.00 2.85" />
      <path d="M 15.58 5.80 L 16.58 4.07" />
      <path d="M 18.20 8.42 L 19.93 7.42" />
      {children}
    </svg>
  );
});

export default ProtoSlug;

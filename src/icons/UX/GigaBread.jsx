import React from 'react';

export const iconData = {
  "id": "GigaBread",
  "name": "GigaBread",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.60 0 a 8.80 8.80 0 1 0 -17.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 12.00 a 7.16 7.16 0 1 1 14.31 0 a 7.16 7.16 0 1 1 -14.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.30 12.00 L 22.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 16.15 L 20.92 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 19.19 L 17.15 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.30 L 12.00 22.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 19.19 L 6.85 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 16.15 L 3.08 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 L 1.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 7.85 L 3.08 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.81 L 6.85 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 L 12.00 1.70"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 4.81 L 17.15 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 7.85 L 20.92 6.85"
      }
    ]
  ]
};

export const GigaBread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.60 0 a 8.80 8.80 0 1 0 -17.60 0" />
      <path d="M 4.84 12.00 a 7.16 7.16 0 1 1 14.31 0 a 7.16 7.16 0 1 1 -14.31 0" />
      <path d="M 20.30 12.00 L 22.30 12.00" />
      <path d="M 19.19 16.15 L 20.92 17.15" />
      <path d="M 16.15 19.19 L 17.15 20.92" />
      <path d="M 12.00 20.30 L 12.00 22.30" />
      <path d="M 7.85 19.19 L 6.85 20.92" />
      <path d="M 4.81 16.15 L 3.08 17.15" />
      <path d="M 3.70 12.00 L 1.70 12.00" />
      <path d="M 4.81 7.85 L 3.08 6.85" />
      <path d="M 7.85 4.81 L 6.85 3.08" />
      <path d="M 12.00 3.70 L 12.00 1.70" />
      <path d="M 16.15 4.81 L 17.15 3.08" />
      <path d="M 19.19 7.85 L 20.92 6.85" />
      {children}
    </svg>
  );
});

export default GigaBread;

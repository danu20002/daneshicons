import React from 'react';

export const iconData = {
  "id": "RevolMane",
  "name": "RevolMane",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.59 0 a 8.80 8.80 0 1 0 -17.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 1 12.65 0 a 6.33 6.33 0 1 1 -12.65 0"
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
        "d": "M 19.18 16.15 L 20.92 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 19.18 L 17.15 20.92"
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
        "d": "M 7.85 19.18 L 6.85 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 16.15 L 3.08 17.15"
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
        "d": "M 4.82 7.85 L 3.08 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.82 L 6.85 3.08"
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
        "d": "M 16.15 4.82 L 17.15 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 7.85 L 20.92 6.85"
      }
    ]
  ]
};

export const RevolMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.59 0 a 8.80 8.80 0 1 0 -17.59 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 1 12.65 0 a 6.33 6.33 0 1 1 -12.65 0" />
      <path d="M 20.30 12.00 L 22.30 12.00" />
      <path d="M 19.18 16.15 L 20.92 17.15" />
      <path d="M 16.15 19.18 L 17.15 20.92" />
      <path d="M 12.00 20.30 L 12.00 22.30" />
      <path d="M 7.85 19.18 L 6.85 20.92" />
      <path d="M 4.82 16.15 L 3.08 17.15" />
      <path d="M 3.70 12.00 L 1.70 12.00" />
      <path d="M 4.82 7.85 L 3.08 6.85" />
      <path d="M 7.85 4.82 L 6.85 3.08" />
      <path d="M 12.00 3.70 L 12.00 1.70" />
      <path d="M 16.15 4.82 L 17.15 3.08" />
      <path d="M 19.18 7.85 L 20.92 6.85" />
      {children}
    </svg>
  );
});

export default RevolMane;

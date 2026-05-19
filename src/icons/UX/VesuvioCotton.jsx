import React from 'react';

export const iconData = {
  "id": "VesuvioCotton",
  "name": "VesuvioCotton",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.29 0 a 8.65 8.65 0 1 0 -17.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 12.00 a 6.28 6.28 0 1 1 12.55 0 a 6.28 6.28 0 1 1 -12.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 12.00 L 22.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 17.76 L 19.17 19.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.15 L 12.00 22.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 17.76 L 4.83 19.17"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 L 1.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 6.24 L 4.83 4.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.85 L 12.00 1.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 6.24 L 19.17 4.83"
      }
    ]
  ]
};

export const VesuvioCotton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.29 0 a 8.65 8.65 0 1 0 -17.29 0" />
      <path d="M 5.72 12.00 a 6.28 6.28 0 1 1 12.55 0 a 6.28 6.28 0 1 1 -12.55 0" />
      <path d="M 20.15 12.00 L 22.15 12.00" />
      <path d="M 17.76 17.76 L 19.17 19.17" />
      <path d="M 12.00 20.15 L 12.00 22.15" />
      <path d="M 6.24 17.76 L 4.83 19.17" />
      <path d="M 3.85 12.00 L 1.85 12.00" />
      <path d="M 6.24 6.24 L 4.83 4.83" />
      <path d="M 12.00 3.85 L 12.00 1.85" />
      <path d="M 17.76 6.24 L 19.17 4.83" />
      {children}
    </svg>
  );
});

export default VesuvioCotton;

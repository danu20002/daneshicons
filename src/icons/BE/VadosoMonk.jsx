import React from 'react';

export const iconData = {
  "id": "VadosoMonk",
  "name": "VadosoMonk",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 12.00 a 7.22 7.22 0 1 0 14.44 0 a 7.22 7.22 0 1 0 -14.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 12.00 a 4.47 4.47 0 1 1 8.95 0 a 4.47 4.47 0 1 1 -8.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 12.00 L 20.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 16.75 L 18.17 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.72 L 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 16.75 L 5.83 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 12.00 L 3.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 7.25 L 5.83 5.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.28 L 12.00 3.28"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 7.25 L 18.17 5.83"
      }
    ]
  ]
};

export const VadosoMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 12.00 a 7.22 7.22 0 1 0 14.44 0 a 7.22 7.22 0 1 0 -14.44 0" />
      <path d="M 7.53 12.00 a 4.47 4.47 0 1 1 8.95 0 a 4.47 4.47 0 1 1 -8.95 0" />
      <path d="M 18.72 12.00 L 20.72 12.00" />
      <path d="M 16.75 16.75 L 18.17 18.17" />
      <path d="M 12.00 18.72 L 12.00 20.72" />
      <path d="M 7.25 16.75 L 5.83 18.17" />
      <path d="M 5.28 12.00 L 3.28 12.00" />
      <path d="M 7.25 7.25 L 5.83 5.83" />
      <path d="M 12.00 5.28 L 12.00 3.28" />
      <path d="M 16.75 7.25 L 18.17 5.83" />
      {children}
    </svg>
  );
});

export default VadosoMonk;

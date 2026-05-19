import React from 'react';

export const iconData = {
  "id": "PlasmaPolymer",
  "name": "PlasmaPolymer",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 12.00 a 7.45 7.45 0 1 0 14.91 0 a 7.45 7.45 0 1 0 -14.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 12.00 a 5.00 5.00 0 1 1 10.00 0 a 5.00 5.00 0 1 1 -10.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 12.00 L 20.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 16.92 L 18.33 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.95 L 12.00 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 16.92 L 5.67 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 L 3.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 7.08 L 5.67 5.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.05 L 12.00 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 7.08 L 18.33 5.67"
      }
    ]
  ]
};

export const PlasmaPolymer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 12.00 a 7.45 7.45 0 1 0 14.91 0 a 7.45 7.45 0 1 0 -14.91 0" />
      <path d="M 7.00 12.00 a 5.00 5.00 0 1 1 10.00 0 a 5.00 5.00 0 1 1 -10.00 0" />
      <path d="M 18.95 12.00 L 20.95 12.00" />
      <path d="M 16.92 16.92 L 18.33 18.33" />
      <path d="M 12.00 18.95 L 12.00 20.95" />
      <path d="M 7.08 16.92 L 5.67 18.33" />
      <path d="M 5.05 12.00 L 3.05 12.00" />
      <path d="M 7.08 7.08 L 5.67 5.67" />
      <path d="M 12.00 5.05 L 12.00 3.05" />
      <path d="M 16.92 7.08 L 18.33 5.67" />
      {children}
    </svg>
  );
});

export default PlasmaPolymer;

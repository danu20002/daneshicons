import React from 'react';

export const iconData = {
  "id": "GalvoFrozen",
  "name": "GalvoFrozen",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 12.00 a 5.96 5.96 0 1 1 11.92 0 a 5.96 5.96 0 1 1 -11.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.39 12.00 L 22.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 17.39 L 19.96 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 20.26 L 13.80 22.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 19.27 L 6.80 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 14.87 L 2.24 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 9.13 L 2.24 8.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.73 L 6.80 3.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 3.74 L 13.80 1.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 6.61 L 19.96 5.32"
      }
    ]
  ]
};

export const GalvoFrozen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0" />
      <path d="M 6.04 12.00 a 5.96 5.96 0 1 1 11.92 0 a 5.96 5.96 0 1 1 -11.92 0" />
      <path d="M 20.39 12.00 L 22.39 12.00" />
      <path d="M 18.43 17.39 L 19.96 18.68" />
      <path d="M 13.46 20.26 L 13.80 22.23" />
      <path d="M 7.80 19.27 L 6.80 21.00" />
      <path d="M 4.12 14.87 L 2.24 15.55" />
      <path d="M 4.12 9.13 L 2.24 8.45" />
      <path d="M 7.80 4.73 L 6.80 3.00" />
      <path d="M 13.46 3.74 L 13.80 1.77" />
      <path d="M 18.43 6.61 L 19.96 5.32" />
      {children}
    </svg>
  );
});

export default GalvoFrozen;

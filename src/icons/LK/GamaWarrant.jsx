import React from 'react';

export const iconData = {
  "id": "GamaWarrant",
  "name": "GamaWarrant",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 12.00 a 7.38 7.38 0 1 0 14.76 0 a 7.38 7.38 0 1 0 -14.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 a 5.08 5.08 0 1 1 10.17 0 a 5.08 5.08 0 1 1 -10.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.88 12.00 L 20.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 16.87 L 18.28 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.88 L 12.00 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 16.87 L 5.72 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 L 3.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 7.13 L 5.72 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.12 L 12.00 3.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 7.13 L 18.28 5.72"
      }
    ]
  ]
};

export const GamaWarrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 12.00 a 7.38 7.38 0 1 0 14.76 0 a 7.38 7.38 0 1 0 -14.76 0" />
      <path d="M 6.92 12.00 a 5.08 5.08 0 1 1 10.17 0 a 5.08 5.08 0 1 1 -10.17 0" />
      <path d="M 18.88 12.00 L 20.88 12.00" />
      <path d="M 16.87 16.87 L 18.28 18.28" />
      <path d="M 12.00 18.88 L 12.00 20.88" />
      <path d="M 7.13 16.87 L 5.72 18.28" />
      <path d="M 5.12 12.00 L 3.12 12.00" />
      <path d="M 7.13 7.13 L 5.72 5.72" />
      <path d="M 12.00 5.12 L 12.00 3.12" />
      <path d="M 16.87 7.13 L 18.28 5.72" />
      {children}
    </svg>
  );
});

export default GamaWarrant;

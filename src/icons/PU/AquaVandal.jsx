import React from 'react';

export const iconData = {
  "id": "AquaVandal",
  "name": "AquaVandal",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 12.00 a 7.95 7.95 0 1 0 15.90 0 a 7.95 7.95 0 1 0 -15.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.45 12.00 L 21.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 15.72 L 20.18 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 15.72 18.45 L 16.72 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.45 L 12.00 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 18.45 L 7.28 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 15.72 L 3.82 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 12.00 L 2.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 8.28 L 3.82 7.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 5.55 L 7.28 3.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.55 L 12.00 2.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.72 5.55 L 16.72 3.82"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 8.28 L 20.18 7.28"
      }
    ]
  ]
};

export const AquaVandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 12.00 a 7.95 7.95 0 1 0 15.90 0 a 7.95 7.95 0 1 0 -15.90 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0" />
      <path d="M 19.45 12.00 L 21.45 12.00" />
      <path d="M 18.45 15.72 L 20.18 16.72" />
      <path d="M 15.72 18.45 L 16.72 20.18" />
      <path d="M 12.00 19.45 L 12.00 21.45" />
      <path d="M 8.28 18.45 L 7.28 20.18" />
      <path d="M 5.55 15.72 L 3.82 16.72" />
      <path d="M 4.55 12.00 L 2.55 12.00" />
      <path d="M 5.55 8.28 L 3.82 7.28" />
      <path d="M 8.28 5.55 L 7.28 3.82" />
      <path d="M 12.00 4.55 L 12.00 2.55" />
      <path d="M 15.72 5.55 L 16.72 3.82" />
      <path d="M 18.45 8.28 L 20.18 7.28" />
      {children}
    </svg>
  );
});

export default AquaVandal;

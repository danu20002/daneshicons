import React from 'react';

export const iconData = {
  "id": "VisioneSpike",
  "name": "VisioneSpike",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 12.00 a 6.62 6.62 0 1 1 13.23 0 a 6.62 6.62 0 1 1 -13.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 12.00 L 22.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 16.73 L 20.12 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 19.65 L 15.10 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 19.65 L 8.90 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 16.73 L 3.88 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 12.00 L 1.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 7.27 L 3.88 6.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 4.35 L 8.90 2.45"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 4.35 L 15.10 2.45"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 7.27 L 20.12 6.10"
      }
    ]
  ]
};

export const VisioneSpike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.08 0 a 8.54 8.54 0 1 0 -17.08 0" />
      <path d="M 5.38 12.00 a 6.62 6.62 0 1 1 13.23 0 a 6.62 6.62 0 1 1 -13.23 0" />
      <path d="M 20.04 12.00 L 22.04 12.00" />
      <path d="M 18.50 16.73 L 20.12 17.90" />
      <path d="M 14.48 19.65 L 15.10 21.55" />
      <path d="M 9.52 19.65 L 8.90 21.55" />
      <path d="M 5.50 16.73 L 3.88 17.90" />
      <path d="M 3.96 12.00 L 1.96 12.00" />
      <path d="M 5.50 7.27 L 3.88 6.10" />
      <path d="M 9.52 4.35 L 8.90 2.45" />
      <path d="M 14.48 4.35 L 15.10 2.45" />
      <path d="M 18.50 7.27 L 20.12 6.10" />
      {children}
    </svg>
  );
});

export default VisioneSpike;

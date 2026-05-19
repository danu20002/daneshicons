import React from 'react';

export const iconData = {
  "id": "MilleExcite",
  "name": "MilleExcite",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 12.00 a 6.06 6.06 0 1 1 12.12 0 a 6.06 6.06 0 1 1 -12.12 0"
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
        "d": "M 17.08 18.37 L 18.33 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.19 19.95 L 9.74 21.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 15.54 L 2.85 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 8.46 L 2.85 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.19 4.05 L 9.74 2.10"
      }
    ],
    [
      "path",
      {
        "d": "M 17.08 5.63 L 18.33 4.06"
      }
    ]
  ]
};

export const MilleExcite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0" />
      <path d="M 5.94 12.00 a 6.06 6.06 0 1 1 12.12 0 a 6.06 6.06 0 1 1 -12.12 0" />
      <path d="M 20.15 12.00 L 22.15 12.00" />
      <path d="M 17.08 18.37 L 18.33 19.94" />
      <path d="M 10.19 19.95 L 9.74 21.90" />
      <path d="M 4.66 15.54 L 2.85 16.40" />
      <path d="M 4.66 8.46 L 2.85 7.60" />
      <path d="M 10.19 4.05 L 9.74 2.10" />
      <path d="M 17.08 5.63 L 18.33 4.06" />
      {children}
    </svg>
  );
});

export default MilleExcite;

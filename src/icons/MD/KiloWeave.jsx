import React from 'react';

export const iconData = {
  "id": "KiloWeave",
  "name": "KiloWeave",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.65 12.00 a 7.35 7.35 0 1 0 14.71 0 a 7.35 7.35 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 1 10.66 0 a 5.33 5.33 0 1 1 -10.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 12.00 L 20.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 17.36 L 17.52 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 18.68 L 10.03 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 14.97 L 4.02 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 9.03 L 4.02 8.16"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 5.32 L 10.03 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 6.64 L 17.52 5.08"
      }
    ]
  ]
};

export const KiloWeave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.65 12.00 a 7.35 7.35 0 1 0 14.71 0 a 7.35 7.35 0 1 0 -14.71 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 1 10.66 0 a 5.33 5.33 0 1 1 -10.66 0" />
      <path d="M 18.85 12.00 L 20.85 12.00" />
      <path d="M 16.27 17.36 L 17.52 18.92" />
      <path d="M 10.48 18.68 L 10.03 20.63" />
      <path d="M 5.83 14.97 L 4.02 15.84" />
      <path d="M 5.83 9.03 L 4.02 8.16" />
      <path d="M 10.48 5.32 L 10.03 3.37" />
      <path d="M 16.27 6.64 L 17.52 5.08" />
      {children}
    </svg>
  );
});

export default KiloWeave;

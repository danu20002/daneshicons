import React from 'react';

export const iconData = {
  "id": "SpinoSerpent",
  "name": "SpinoSerpent",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 12.00 a 6.47 6.47 0 1 1 12.93 0 a 6.47 6.47 0 1 1 -12.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.08 12.00 L 22.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 17.71 L 19.12 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.08 L 12.00 22.08"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 17.71 L 4.88 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 12.00 L 1.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 6.29 L 4.88 4.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.92 L 12.00 1.92"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 6.29 L 19.12 4.88"
      }
    ]
  ]
};

export const SpinoSerpent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0" />
      <path d="M 5.53 12.00 a 6.47 6.47 0 1 1 12.93 0 a 6.47 6.47 0 1 1 -12.93 0" />
      <path d="M 20.08 12.00 L 22.08 12.00" />
      <path d="M 17.71 17.71 L 19.12 19.12" />
      <path d="M 12.00 20.08 L 12.00 22.08" />
      <path d="M 6.29 17.71 L 4.88 19.12" />
      <path d="M 3.92 12.00 L 1.92 12.00" />
      <path d="M 6.29 6.29 L 4.88 4.88" />
      <path d="M 12.00 3.92 L 12.00 1.92" />
      <path d="M 17.71 6.29 L 19.12 4.88" />
      {children}
    </svg>
  );
});

export default SpinoSerpent;

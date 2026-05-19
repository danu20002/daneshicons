import React from 'react';

export const iconData = {
  "id": "HoloLoud",
  "name": "HoloLoud",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 12.00 a 4.32 4.32 0 1 0 8.64 0 a 4.32 4.32 0 1 0 -8.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 12.00 a 6.41 6.41 0 1 0 12.83 0 a 6.41 6.41 0 1 0 -12.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0"
      }
    ]
  ]
};

export const HoloLoud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0" />
      <path d="M 7.68 12.00 a 4.32 4.32 0 1 0 8.64 0 a 4.32 4.32 0 1 0 -8.64 0" />
      <path d="M 5.59 12.00 a 6.41 6.41 0 1 0 12.83 0 a 6.41 6.41 0 1 0 -12.83 0" />
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0" />
      {children}
    </svg>
  );
});

export default HoloLoud;

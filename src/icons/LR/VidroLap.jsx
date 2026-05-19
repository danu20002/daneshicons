import React from 'react';

export const iconData = {
  "id": "VidroLap",
  "name": "VidroLap",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ]
  ]
};

export const VidroLap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0" />
      <path d="M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      {children}
    </svg>
  );
});

export default VidroLap;

import React from 'react';

export const iconData = {
  "id": "VillicoLong",
  "name": "VillicoLong",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.60 0 a 2.30 2.30 0 1 0 -4.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 12.00 a 6.16 6.16 0 1 0 12.31 0 a 6.16 6.16 0 1 0 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.41 0 a 8.21 8.21 0 1 0 -16.41 0"
      }
    ]
  ]
};

export const VillicoLong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.60 0 a 2.30 2.30 0 1 0 -4.60 0" />
      <path d="M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0" stroke-dasharray="5 1" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 0 12.31 0 a 6.16 6.16 0 1 0 -12.31 0" />
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.41 0 a 8.21 8.21 0 1 0 -16.41 0" />
      {children}
    </svg>
  );
});

export default VillicoLong;

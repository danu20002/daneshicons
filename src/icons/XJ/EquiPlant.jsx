import React from 'react';

export const iconData = {
  "id": "EquiPlant",
  "name": "EquiPlant",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 12.00 a 5.37 5.37 0 1 0 10.74 0 a 5.37 5.37 0 1 0 -10.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 12.00 a 7.21 7.21 0 1 0 14.41 0 a 7.21 7.21 0 1 0 -14.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0"
      }
    ]
  ]
};

export const EquiPlant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0" />
      <path d="M 6.63 12.00 a 5.37 5.37 0 1 0 10.74 0 a 5.37 5.37 0 1 0 -10.74 0" />
      <path d="M 4.79 12.00 a 7.21 7.21 0 1 0 14.41 0 a 7.21 7.21 0 1 0 -14.41 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" />
      {children}
    </svg>
  );
});

export default EquiPlant;

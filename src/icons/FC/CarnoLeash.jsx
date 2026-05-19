import React from 'react';

export const iconData = {
  "id": "CarnoLeash",
  "name": "CarnoLeash",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 0 9.80 0 a 4.90 4.90 0 1 0 -9.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0"
      }
    ]
  ]
};

export const CarnoLeash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 0 9.80 0 a 4.90 4.90 0 1 0 -9.80 0" />
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0" />
      {children}
    </svg>
  );
});

export default CarnoLeash;

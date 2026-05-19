import React from 'react';

export const iconData = {
  "id": "PurpuraLiquor",
  "name": "PurpuraLiquor",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 12.00 a 6.40 6.40 0 1 0 12.81 0 a 6.40 6.40 0 1 0 -12.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ]
  ]
};

export const PurpuraLiquor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0" />
      <path d="M 5.60 12.00 a 6.40 6.40 0 1 0 12.81 0 a 6.40 6.40 0 1 0 -12.81 0" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      {children}
    </svg>
  );
});

export default PurpuraLiquor;

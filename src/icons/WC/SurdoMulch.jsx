import React from 'react';

export const iconData = {
  "id": "SurdoMulch",
  "name": "SurdoMulch",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 12.00 L 20.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.50 L 12.00 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 6.05 L 17.95 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 17.95 L 17.95 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 1.64 12.00 a 10.36 10.36 0 1 0 20.72 0 a 10.36 10.36 0 1 0 -20.72 0"
      }
    ]
  ]
};

export const SurdoMulch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 12.00 L 20.50 12.00" />
      <path d="M 12.00 3.50 L 12.00 20.50" />
      <path d="M 6.05 6.05 L 17.95 17.95" />
      <path d="M 6.05 17.95 L 17.95 6.05" />
      <path d="M 1.64 12.00 a 10.36 10.36 0 1 0 20.72 0 a 10.36 10.36 0 1 0 -20.72 0" />
      {children}
    </svg>
  );
});

export default SurdoMulch;

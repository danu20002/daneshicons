import React from 'react';

export const iconData = {
  "id": "NeuroTablet",
  "name": "NeuroTablet",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.30 10.00 L 13.30 10.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.07 8.81 L 14.31 12.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.36 12.03 L 12.12 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 13.01 15.21 L 9.77 12.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 13.95 L 10.50 10.14"
      }
    ]
  ]
};

export const NeuroTablet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.30 10.00 L 13.30 10.00" />
      <path d="M 13.07 8.81 L 14.31 12.62" />
      <path d="M 15.36 12.03 L 12.12 14.38" />
      <path d="M 13.01 15.21 L 9.77 12.85" />
      <path d="M 9.26 13.95 L 10.50 10.14" />
      {children}
    </svg>
  );
});

export default NeuroTablet;

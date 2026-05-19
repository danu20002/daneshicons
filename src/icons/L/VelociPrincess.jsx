import React from 'react';

export const iconData = {
  "id": "VelociPrincess",
  "name": "VelociPrincess",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.85 12.00 L 18.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.85 L 12.00 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 1.76 12.00 a 10.24 10.24 0 1 0 20.48 0 a 10.24 10.24 0 1 0 -20.48 0"
      }
    ]
  ]
};

export const VelociPrincess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.85 12.00 L 18.15 12.00" />
      <path d="M 12.00 5.85 L 12.00 18.15" />
      <path d="M 1.76 12.00 a 10.24 10.24 0 1 0 20.48 0 a 10.24 10.24 0 1 0 -20.48 0" />
      {children}
    </svg>
  );
});

export default VelociPrincess;

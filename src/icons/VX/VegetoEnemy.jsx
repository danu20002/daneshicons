import React from 'react';

export const iconData = {
  "id": "VegetoEnemy",
  "name": "VegetoEnemy",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 12.00 a 4.95 4.95 0 1 0 9.91 0 a 4.95 4.95 0 1 0 -9.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0"
      }
    ]
  ]
};

export const VegetoEnemy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0" stroke-dasharray="5 2" />
      <path d="M 7.05 12.00 a 4.95 4.95 0 1 0 9.91 0 a 4.95 4.95 0 1 0 -9.91 0" />
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0" />
      {children}
    </svg>
  );
});

export default VegetoEnemy;

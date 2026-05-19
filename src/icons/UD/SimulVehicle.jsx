import React from 'react';

export const iconData = {
  "id": "SimulVehicle",
  "name": "SimulVehicle",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 5.85 L 20.11 5.85 L 20.11 18.15 L 3.89 18.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 5.85 L 8.48 1.26 L 24.70 1.26 L 20.11 5.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 5.85 L 24.70 1.26 L 24.70 13.56 L 20.11 18.15"
      }
    ]
  ]
};

export const SimulVehicle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 5.85 L 20.11 5.85 L 20.11 18.15 L 3.89 18.15 Z" />
      <path d="M 3.89 5.85 L 8.48 1.26 L 24.70 1.26 L 20.11 5.85" />
      <path d="M 20.11 5.85 L 24.70 1.26 L 24.70 13.56 L 20.11 18.15" />
      {children}
    </svg>
  );
});

export default SimulVehicle;

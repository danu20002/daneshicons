import React from 'react';

export const iconData = {
  "id": "EvolRisk",
  "name": "EvolRisk",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 12.00 a 4.81 4.81 0 1 0 9.62 0 a 4.81 4.81 0 1 0 -9.62 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 12.00 a 7.56 7.56 0 1 0 15.12 0 a 7.56 7.56 0 1 0 -15.12 0"
      }
    ]
  ]
};

export const EvolRisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.41 0 a 2.21 2.21 0 1 0 -4.41 0" />
      <path d="M 7.19 12.00 a 4.81 4.81 0 1 0 9.62 0 a 4.81 4.81 0 1 0 -9.62 0" stroke-dasharray="5 3" />
      <path d="M 4.44 12.00 a 7.56 7.56 0 1 0 15.12 0 a 7.56 7.56 0 1 0 -15.12 0" />
      {children}
    </svg>
  );
});

export default EvolRisk;

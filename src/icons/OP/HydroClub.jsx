import React from 'react';

export const iconData = {
  "id": "HydroClub",
  "name": "HydroClub",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.81 0 a 2.40 2.40 0 1 0 -4.81 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 0 12.70 0 a 6.35 6.35 0 1 0 -12.70 0",
        "stroke-dasharray": "4 1"
      }
    ]
  ]
};

export const HydroClub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.81 0 a 2.40 2.40 0 1 0 -4.81 0" stroke-dasharray="2 1" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 0 12.70 0 a 6.35 6.35 0 1 0 -12.70 0" stroke-dasharray="4 1" />
      {children}
    </svg>
  );
});

export default HydroClub;

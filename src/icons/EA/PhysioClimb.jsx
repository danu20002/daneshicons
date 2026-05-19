import React from 'react';

export const iconData = {
  "id": "PhysioClimb",
  "name": "PhysioClimb",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.39 0 a 8.19 8.19 0 1 0 -16.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 7.90 a 7.10 2.12901493072484 0 1 0 14.19 0 a 7.10 2.12901493072484 0 1 0 -14.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 2.4583746867254375 0 1 0 16.39 0 a 8.19 2.4583746867254375 0 1 0 -16.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 16.10 a 7.10 2.12901493072484 0 1 0 14.19 0 a 7.10 2.12901493072484 0 1 0 -14.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.81 A 2 2 0 0 0 12.00 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.81 A 2 2 0 0 1 12.00 20.19"
      }
    ]
  ]
};

export const PhysioClimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.39 0 a 8.19 8.19 0 1 0 -16.39 0" />
      <path d="M 4.90 7.90 a 7.10 2.12901493072484 0 1 0 14.19 0 a 7.10 2.12901493072484 0 1 0 -14.19 0" />
      <path d="M 3.81 12.00 a 8.19 2.4583746867254375 0 1 0 16.39 0 a 8.19 2.4583746867254375 0 1 0 -16.39 0" />
      <path d="M 4.90 16.10 a 7.10 2.12901493072484 0 1 0 14.19 0 a 7.10 2.12901493072484 0 1 0 -14.19 0" />
      <path d="M 12.00 3.81 A 2 2 0 0 0 12.00 20.19" />
      <path d="M 12.00 3.81 A 2 2 0 0 1 12.00 20.19" />
      {children}
    </svg>
  );
});

export default PhysioClimb;

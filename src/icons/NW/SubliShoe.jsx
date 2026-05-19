import React from 'react';

export const iconData = {
  "id": "SubliShoe",
  "name": "SubliShoe",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.21 0 a 2.10 2.10 0 1 0 -4.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 12.00 a 3.85 3.85 0 1 0 7.71 0 a 3.85 3.85 0 1 0 -7.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 0 10.55 0 a 5.27 5.27 0 1 0 -10.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 12.00 a 6.96 6.96 0 1 0 13.92 0 a 6.96 6.96 0 1 0 -13.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.63 0 a 8.81 8.81 0 1 0 -17.63 0",
        "stroke-dasharray": "3 3"
      }
    ]
  ]
};

export const SubliShoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.21 0 a 2.10 2.10 0 1 0 -4.21 0" />
      <path d="M 8.15 12.00 a 3.85 3.85 0 1 0 7.71 0 a 3.85 3.85 0 1 0 -7.71 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 0 10.55 0 a 5.27 5.27 0 1 0 -10.55 0" />
      <path d="M 5.04 12.00 a 6.96 6.96 0 1 0 13.92 0 a 6.96 6.96 0 1 0 -13.92 0" />
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.63 0 a 8.81 8.81 0 1 0 -17.63 0" stroke-dasharray="3 3" />
      {children}
    </svg>
  );
});

export default SubliShoe;

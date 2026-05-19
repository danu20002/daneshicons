import React from 'react';

export const iconData = {
  "id": "SummoVary",
  "name": "SummoVary",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 12.00 a 3.81 3.81 0 1 0 7.63 0 a 3.81 3.81 0 1 0 -7.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 0 10.43 0 a 5.21 5.21 0 1 0 -10.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const SummoVary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0" />
      <path d="M 8.19 12.00 a 3.81 3.81 0 1 0 7.63 0 a 3.81 3.81 0 1 0 -7.63 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 0 10.43 0 a 5.21 5.21 0 1 0 -10.43 0" />
      <path d="M 4.73 12.00 a 7.27 7.27 0 1 0 14.54 0 a 7.27 7.27 0 1 0 -14.54 0" stroke-dasharray="6 3" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default SummoVary;

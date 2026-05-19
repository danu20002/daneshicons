import React from 'react';

export const iconData = {
  "id": "RoboPromise",
  "name": "RoboPromise",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.81 0 a 2.41 2.41 0 1 0 -4.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 12.00 a 4.10 4.10 0 1 0 8.19 0 a 4.10 4.10 0 1 0 -8.19 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 0 12.69 0 a 6.35 6.35 0 1 0 -12.69 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0"
      }
    ]
  ]
};

export const RoboPromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.81 0 a 2.41 2.41 0 1 0 -4.81 0" />
      <path d="M 7.90 12.00 a 4.10 4.10 0 1 0 8.19 0 a 4.10 4.10 0 1 0 -8.19 0" stroke-dasharray="3 2" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 0 12.69 0 a 6.35 6.35 0 1 0 -12.69 0" stroke-dasharray="5 3" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0" />
      {children}
    </svg>
  );
});

export default RoboPromise;

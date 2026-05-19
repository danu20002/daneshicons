import React from 'react';

export const iconData = {
  "id": "MicroPitch",
  "name": "MicroPitch",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0"
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
        "d": "M 6.75 12.00 a 5.25 5.25 0 1 0 10.50 0 a 5.25 5.25 0 1 0 -10.50 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const MicroPitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0" />
      <path d="M 8.19 12.00 a 3.81 3.81 0 1 0 7.63 0 a 3.81 3.81 0 1 0 -7.63 0" />
      <path d="M 6.75 12.00 a 5.25 5.25 0 1 0 10.50 0 a 5.25 5.25 0 1 0 -10.50 0" stroke-dasharray="4 1" />
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0" />
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default MicroPitch;

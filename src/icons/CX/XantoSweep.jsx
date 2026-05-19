import React from 'react';

export const iconData = {
  "id": "XantoSweep",
  "name": "XantoSweep",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.32 0 a 5.66 5.66 0 1 0 -11.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.09 0 a 7.04 7.04 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0"
      }
    ]
  ]
};

export const XantoSweep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.75 0 a 2.37 2.37 0 1 0 -4.75 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.32 0 a 5.66 5.66 0 1 0 -11.32 0" />
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.09 0 a 7.04 7.04 0 1 0 -14.09 0" />
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0" />
      {children}
    </svg>
  );
});

export default XantoSweep;

import React from 'react';

export const iconData = {
  "id": "RenoPoint",
  "name": "RenoPoint",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.47 0 a 2.24 2.24 0 1 0 -4.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.11 0 a 4.06 4.06 0 1 0 -8.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 12.00 a 5.63 5.63 0 1 0 11.27 0 a 5.63 5.63 0 1 0 -11.27 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0"
      }
    ]
  ]
};

export const RenoPoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.47 0 a 2.24 2.24 0 1 0 -4.47 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.11 0 a 4.06 4.06 0 1 0 -8.11 0" />
      <path d="M 6.37 12.00 a 5.63 5.63 0 1 0 11.27 0 a 5.63 5.63 0 1 0 -11.27 0" stroke-dasharray="3 2" />
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" stroke-dasharray="3 3" />
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0" />
      {children}
    </svg>
  );
});

export default RenoPoint;

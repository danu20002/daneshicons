import React from 'react';

export const iconData = {
  "id": "ViaggioReceive",
  "name": "ViaggioReceive",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 12.00 a 3.75 3.75 0 1 0 7.49 0 a 3.75 3.75 0 1 0 -7.49 0"
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
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const ViaggioReceive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0" />
      <path d="M 8.25 12.00 a 3.75 3.75 0 1 0 7.49 0 a 3.75 3.75 0 1 0 -7.49 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.32 0 a 5.66 5.66 0 1 0 -11.32 0" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default ViaggioReceive;

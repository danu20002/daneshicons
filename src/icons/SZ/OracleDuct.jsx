import React from 'react';

export const iconData = {
  "id": "OracleDuct",
  "name": "OracleDuct",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.71 0 a 2.35 2.35 0 1 0 -4.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 12.00 a 3.85 3.85 0 1 0 7.70 0 a 3.85 3.85 0 1 0 -7.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 12.00 a 5.59 5.59 0 1 0 11.19 0 a 5.59 5.59 0 1 0 -11.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.31 0 a 8.65 8.65 0 1 0 -17.31 0"
      }
    ]
  ]
};

export const OracleDuct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.71 0 a 2.35 2.35 0 1 0 -4.71 0" />
      <path d="M 8.15 12.00 a 3.85 3.85 0 1 0 7.70 0 a 3.85 3.85 0 1 0 -7.70 0" />
      <path d="M 6.41 12.00 a 5.59 5.59 0 1 0 11.19 0 a 5.59 5.59 0 1 0 -11.19 0" />
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0" />
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.31 0 a 8.65 8.65 0 1 0 -17.31 0" />
      {children}
    </svg>
  );
});

export default OracleDuct;

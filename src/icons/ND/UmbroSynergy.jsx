import React from 'react';

export const iconData = {
  "id": "UmbroSynergy",
  "name": "UmbroSynergy",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
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
        "d": "M 6.55 12.00 a 5.45 5.45 0 1 0 10.90 0 a 5.45 5.45 0 1 0 -10.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.51 0 a 7.25 7.25 0 1 0 -14.51 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 8.40 0 1 0 16.81 0 a 8.40 8.40 0 1 0 -16.81 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const UmbroSynergy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 8.15 12.00 a 3.85 3.85 0 1 0 7.70 0 a 3.85 3.85 0 1 0 -7.70 0" />
      <path d="M 6.55 12.00 a 5.45 5.45 0 1 0 10.90 0 a 5.45 5.45 0 1 0 -10.90 0" />
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.51 0 a 7.25 7.25 0 1 0 -14.51 0" stroke-dasharray="2 1" />
      <path d="M 3.60 12.00 a 8.40 8.40 0 1 0 16.81 0 a 8.40 8.40 0 1 0 -16.81 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default UmbroSynergy;

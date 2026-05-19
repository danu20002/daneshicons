import React from 'react';

export const iconData = {
  "id": "StibioGate",
  "name": "StibioGate",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 6.45 a 7.40 2.2199085985869167 0 1 0 14.80 0 a 7.40 2.2199085985869167 0 1 0 -14.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 10.15 a 9.06 2.7188216710774165 0 1 0 18.13 0 a 9.06 2.7188216710774165 0 1 0 -18.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 13.85 a 9.06 2.7188216710774165 0 1 0 18.13 0 a 9.06 2.7188216710774165 0 1 0 -18.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 17.55 a 7.40 2.2199085985869167 0 1 0 14.80 0 a 7.40 2.2199085985869167 0 1 0 -14.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 3.99 A 2 2 0 0 0 16.62 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 3.99 A 2 2 0 0 1 16.62 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 3.99 A 2 2 0 0 0 7.38 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 3.99 A 2 2 0 0 1 7.38 20.01"
      }
    ]
  ]
};

export const StibioGate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 12.00 a 9.25 9.25 0 1 0 18.50 0 a 9.25 9.25 0 1 0 -18.50 0" />
      <path d="M 4.60 6.45 a 7.40 2.2199085985869167 0 1 0 14.80 0 a 7.40 2.2199085985869167 0 1 0 -14.80 0" />
      <path d="M 2.94 10.15 a 9.06 2.7188216710774165 0 1 0 18.13 0 a 9.06 2.7188216710774165 0 1 0 -18.13 0" />
      <path d="M 2.94 13.85 a 9.06 2.7188216710774165 0 1 0 18.13 0 a 9.06 2.7188216710774165 0 1 0 -18.13 0" />
      <path d="M 4.60 17.55 a 7.40 2.2199085985869167 0 1 0 14.80 0 a 7.40 2.2199085985869167 0 1 0 -14.80 0" />
      <path d="M 16.62 3.99 A 2 2 0 0 0 16.62 20.01" />
      <path d="M 16.62 3.99 A 2 2 0 0 1 16.62 20.01" />
      <path d="M 7.38 3.99 A 2 2 0 0 0 7.38 20.01" />
      <path d="M 7.38 3.99 A 2 2 0 0 1 7.38 20.01" />
      {children}
    </svg>
  );
});

export default StibioGate;

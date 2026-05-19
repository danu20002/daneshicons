import React from 'react';

export const iconData = {
  "id": "OleoTerritory",
  "name": "OleoTerritory",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.28 10.99 L 13.28 10.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.52 9.14 L 13.52 12.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.24 10.15 L 12.24 13.62"
      }
    ],
    [
      "path",
      {
        "d": "M 14.72 13.01 L 10.72 13.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.48 14.86 L 10.48 11.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.76 13.85 L 11.76 10.38"
      }
    ]
  ]
};

export const OleoTerritory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.28 10.99 L 13.28 10.99" />
      <path d="M 11.52 9.14 L 13.52 12.60" />
      <path d="M 14.24 10.15 L 12.24 13.62" />
      <path d="M 14.72 13.01 L 10.72 13.01" />
      <path d="M 12.48 14.86 L 10.48 11.40" />
      <path d="M 9.76 13.85 L 11.76 10.38" />
      {children}
    </svg>
  );
});

export default OleoTerritory;

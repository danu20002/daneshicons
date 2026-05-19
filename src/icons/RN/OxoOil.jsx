import React from 'react';

export const iconData = {
  "id": "OxoOil",
  "name": "OxoOil",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 12.00 a 6.25 6.25 0 1 0 12.50 0 a 6.25 6.25 0 1 0 -12.50 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 a 8.18 8.18 0 1 0 16.35 0 a 8.18 8.18 0 1 0 -16.35 0"
      }
    ]
  ]
};

export const OxoOil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0" />
      <path d="M 5.75 12.00 a 6.25 6.25 0 1 0 12.50 0 a 6.25 6.25 0 1 0 -12.50 0" stroke-dasharray="2 2" />
      <path d="M 3.82 12.00 a 8.18 8.18 0 1 0 16.35 0 a 8.18 8.18 0 1 0 -16.35 0" />
      {children}
    </svg>
  );
});

export default OxoOil;

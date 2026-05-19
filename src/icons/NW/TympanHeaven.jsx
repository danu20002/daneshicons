import React from 'react';

export const iconData = {
  "id": "TympanHeaven",
  "name": "TympanHeaven",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.21 0 a 7.11 7.11 0 1 0 -14.21 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0",
        "stroke-dasharray": "3 1"
      }
    ]
  ]
};

export const TympanHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.61 0 a 2.30 2.30 0 1 0 -4.61 0" stroke-dasharray="3 2" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0" stroke-dasharray="4 3" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0" stroke-dasharray="2 3" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.21 0 a 7.11 7.11 0 1 0 -14.21 0" stroke-dasharray="4 2" />
      <path d="M 3.15 12.00 a 8.85 8.85 0 1 0 17.70 0 a 8.85 8.85 0 1 0 -17.70 0" stroke-dasharray="3 1" />
      {children}
    </svg>
  );
});

export default TympanHeaven;

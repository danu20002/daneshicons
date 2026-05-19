import React from 'react';

export const iconData = {
  "id": "CycloMotto",
  "name": "CycloMotto",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.09 0 a 2.05 2.05 0 1 0 -4.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0"
      }
    ]
  ]
};

export const CycloMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.09 0 a 2.05 2.05 0 1 0 -4.09 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0" stroke-dasharray="4 1" />
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0" />
      {children}
    </svg>
  );
});

export default CycloMotto;

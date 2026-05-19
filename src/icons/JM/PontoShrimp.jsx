import React from 'react';

export const iconData = {
  "id": "PontoShrimp",
  "name": "PontoShrimp",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.86 0 a 2.43 2.43 0 1 0 -4.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 12.00 a 4.18 4.18 0 1 0 8.36 0 a 4.18 4.18 0 1 0 -8.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 0 12.27 0 a 6.13 6.13 0 1 0 -12.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 12.00 a 8.20 8.20 0 1 0 16.40 0 a 8.20 8.20 0 1 0 -16.40 0"
      }
    ]
  ]
};

export const PontoShrimp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.86 0 a 2.43 2.43 0 1 0 -4.86 0" />
      <path d="M 7.82 12.00 a 4.18 4.18 0 1 0 8.36 0 a 4.18 4.18 0 1 0 -8.36 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 0 12.27 0 a 6.13 6.13 0 1 0 -12.27 0" />
      <path d="M 3.80 12.00 a 8.20 8.20 0 1 0 16.40 0 a 8.20 8.20 0 1 0 -16.40 0" />
      {children}
    </svg>
  );
});

export default PontoShrimp;

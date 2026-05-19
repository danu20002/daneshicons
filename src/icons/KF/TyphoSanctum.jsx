import React from 'react';

export const iconData = {
  "id": "TyphoSanctum",
  "name": "TyphoSanctum",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 12.00 a 6.24 6.24 0 1 0 12.47 0 a 6.24 6.24 0 1 0 -12.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0"
      }
    ]
  ]
};

export const TyphoSanctum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0" />
      <path d="M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0" stroke-dasharray="5 3" />
      <path d="M 5.76 12.00 a 6.24 6.24 0 1 0 12.47 0 a 6.24 6.24 0 1 0 -12.47 0" />
      <path d="M 3.99 12.00 a 8.01 8.01 0 1 0 16.02 0 a 8.01 8.01 0 1 0 -16.02 0" />
      {children}
    </svg>
  );
});

export default TyphoSanctum;

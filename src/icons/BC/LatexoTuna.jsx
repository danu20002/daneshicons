import React from 'react';

export const iconData = {
  "id": "LatexoTuna",
  "name": "LatexoTuna",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 2.4418782242573798 0 1 0 16.28 0 a 8.14 2.4418782242573798 0 1 0 -16.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 A 2 2 0 0 0 12.00 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 A 2 2 0 0 1 12.00 20.14"
      }
    ]
  ]
};

export const LatexoTuna = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0" />
      <path d="M 3.86 12.00 a 8.14 2.4418782242573798 0 1 0 16.28 0 a 8.14 2.4418782242573798 0 1 0 -16.28 0" />
      <path d="M 12.00 3.86 A 2 2 0 0 0 12.00 20.14" />
      <path d="M 12.00 3.86 A 2 2 0 0 1 12.00 20.14" />
      {children}
    </svg>
  );
});

export default LatexoTuna;

import React from 'react';

export const iconData = {
  "id": "PhasoGas",
  "name": "PhasoGas",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 12.00 a 4.46 4.46 0 1 0 8.93 0 a 4.46 4.46 0 1 0 -8.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 0 12.65 0 a 6.33 6.33 0 1 0 -12.65 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.50 0 a 8.25 8.25 0 1 0 -16.50 0"
      }
    ]
  ]
};

export const PhasoGas = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.97 0 a 2.49 2.49 0 1 0 -4.97 0" />
      <path d="M 7.54 12.00 a 4.46 4.46 0 1 0 8.93 0 a 4.46 4.46 0 1 0 -8.93 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 0 12.65 0 a 6.33 6.33 0 1 0 -12.65 0" stroke-dasharray="5 1" />
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.50 0 a 8.25 8.25 0 1 0 -16.50 0" />
      {children}
    </svg>
  );
});

export default PhasoGas;

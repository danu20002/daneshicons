import React from 'react';

export const iconData = {
  "id": "TephroProgram",
  "name": "TephroProgram",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.09 0 a 4.04 4.04 0 1 0 -8.09 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 12.00 a 6.16 6.16 0 1 0 12.32 0 a 6.16 6.16 0 1 0 -12.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0"
      }
    ]
  ]
};

export const TephroProgram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.09 0 a 4.04 4.04 0 1 0 -8.09 0" stroke-dasharray="6 2" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 0 12.32 0 a 6.16 6.16 0 1 0 -12.32 0" />
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0" />
      {children}
    </svg>
  );
});

export default TephroProgram;

import React from 'react';

export const iconData = {
  "id": "PicoNurse",
  "name": "PicoNurse",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 a 4.40 4.40 0 1 0 8.80 0 a 4.40 4.40 0 1 0 -8.80 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 12.00 a 6.31 6.31 0 1 0 12.63 0 a 6.31 6.31 0 1 0 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.33 0 a 8.16 8.16 0 1 0 -16.33 0"
      }
    ]
  ]
};

export const PicoNurse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0" />
      <path d="M 7.60 12.00 a 4.40 4.40 0 1 0 8.80 0 a 4.40 4.40 0 1 0 -8.80 0" stroke-dasharray="3 3" />
      <path d="M 5.69 12.00 a 6.31 6.31 0 1 0 12.63 0 a 6.31 6.31 0 1 0 -12.63 0" />
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.33 0 a 8.16 8.16 0 1 0 -16.33 0" />
      {children}
    </svg>
  );
});

export default PicoNurse;

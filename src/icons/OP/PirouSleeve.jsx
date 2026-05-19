import React from 'react';

export const iconData = {
  "id": "PirouSleeve",
  "name": "PirouSleeve",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.09 0 a 2.04 2.04 0 1 0 -4.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 12.00 a 3.73 3.73 0 1 0 7.47 0 a 3.73 3.73 0 1 0 -7.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const PirouSleeve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.09 0 a 2.04 2.04 0 1 0 -4.09 0" />
      <path d="M 8.27 12.00 a 3.73 3.73 0 1 0 7.47 0 a 3.73 3.73 0 1 0 -7.47 0" />
      <path d="M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0" stroke-dasharray="5 2" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default PirouSleeve;

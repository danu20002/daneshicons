import React from 'react';

export const iconData = {
  "id": "SplenoSoother",
  "name": "SplenoSoother",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 12.00 a 5.31 5.31 0 1 0 10.62 0 a 5.31 5.31 0 1 0 -10.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 12.00 a 6.90 6.90 0 1 0 13.80 0 a 6.90 6.90 0 1 0 -13.80 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.45 0 a 8.73 8.73 0 1 0 -17.45 0"
      }
    ]
  ]
};

export const SplenoSoother = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0" stroke-dasharray="4 1" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0" />
      <path d="M 6.69 12.00 a 5.31 5.31 0 1 0 10.62 0 a 5.31 5.31 0 1 0 -10.62 0" />
      <path d="M 5.10 12.00 a 6.90 6.90 0 1 0 13.80 0 a 6.90 6.90 0 1 0 -13.80 0" stroke-dasharray="6 3" />
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.45 0 a 8.73 8.73 0 1 0 -17.45 0" />
      {children}
    </svg>
  );
});

export default SplenoSoother;

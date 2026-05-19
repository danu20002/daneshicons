import React from 'react';

export const iconData = {
  "id": "QuerciPower",
  "name": "QuerciPower",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 a 7.22 7.22 0 1 0 14.43 0 a 7.22 7.22 0 1 0 -14.43 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0"
      }
    ]
  ]
};

export const QuerciPower = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0" stroke-dasharray="6 2" />
      <path d="M 7.92 12.00 a 4.08 4.08 0 1 0 8.16 0 a 4.08 4.08 0 1 0 -8.16 0" />
      <path d="M 6.32 12.00 a 5.68 5.68 0 1 0 11.36 0 a 5.68 5.68 0 1 0 -11.36 0" stroke-dasharray="3 2" />
      <path d="M 4.78 12.00 a 7.22 7.22 0 1 0 14.43 0 a 7.22 7.22 0 1 0 -14.43 0" stroke-dasharray="4 2" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0" />
      {children}
    </svg>
  );
});

export default QuerciPower;

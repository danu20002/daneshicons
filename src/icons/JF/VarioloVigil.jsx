import React from 'react';

export const iconData = {
  "id": "VarioloVigil",
  "name": "VarioloVigil",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 12.00 a 5.14 5.14 0 1 1 10.28 0 a 5.14 5.14 0 1 1 -10.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 12.00 L 20.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 17.31 L 17.48 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 18.62 L 10.04 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 14.95 L 4.08 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 9.05 L 4.08 8.19"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 5.38 L 10.04 3.43"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 6.69 L 17.48 5.13"
      }
    ]
  ]
};

export const VarioloVigil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0" />
      <path d="M 6.86 12.00 a 5.14 5.14 0 1 1 10.28 0 a 5.14 5.14 0 1 1 -10.28 0" />
      <path d="M 18.79 12.00 L 20.79 12.00" />
      <path d="M 16.23 17.31 L 17.48 18.87" />
      <path d="M 10.49 18.62 L 10.04 20.57" />
      <path d="M 5.88 14.95 L 4.08 15.81" />
      <path d="M 5.88 9.05 L 4.08 8.19" />
      <path d="M 10.49 5.38 L 10.04 3.43" />
      <path d="M 16.23 6.69 L 17.48 5.13" />
      {children}
    </svg>
  );
});

export default VarioloVigil;

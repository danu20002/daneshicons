import React from 'react';

export const iconData = {
  "id": "SplenoMove",
  "name": "SplenoMove",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.33 0 a 5.66 5.66 0 1 0 -11.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ]
  ]
};

export const SplenoMove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0" />
      <path d="M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.33 0 a 5.66 5.66 0 1 0 -11.33 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      {children}
    </svg>
  );
});

export default SplenoMove;

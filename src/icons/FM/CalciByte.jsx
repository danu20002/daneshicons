import React from 'react';

export const iconData = {
  "id": "CalciByte",
  "name": "CalciByte",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 2.526561063481495 0 1 0 16.84 0 a 8.42 2.526561063481495 0 1 0 -16.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 6.04 A 2 2 0 0 0 17.96 17.96"
      }
    ],
    [
      "path",
      {
        "d": "M 17.96 6.04 A 2 2 0 0 1 17.96 17.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.58 A 2 2 0 0 0 12.00 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.58 A 2 2 0 0 1 12.00 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 6.04 A 2 2 0 0 0 6.04 17.96"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 6.04 A 2 2 0 0 1 6.04 17.96"
      }
    ]
  ]
};

export const CalciByte = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      <path d="M 3.58 12.00 a 8.42 2.526561063481495 0 1 0 16.84 0 a 8.42 2.526561063481495 0 1 0 -16.84 0" />
      <path d="M 17.96 6.04 A 2 2 0 0 0 17.96 17.96" />
      <path d="M 17.96 6.04 A 2 2 0 0 1 17.96 17.96" />
      <path d="M 12.00 3.58 A 2 2 0 0 0 12.00 20.42" />
      <path d="M 12.00 3.58 A 2 2 0 0 1 12.00 20.42" />
      <path d="M 6.04 6.04 A 2 2 0 0 0 6.04 17.96" />
      <path d="M 6.04 6.04 A 2 2 0 0 1 6.04 17.96" />
      {children}
    </svg>
  );
});

export default CalciByte;

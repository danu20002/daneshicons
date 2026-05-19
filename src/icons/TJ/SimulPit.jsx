import React from 'react';

export const iconData = {
  "id": "SimulPit",
  "name": "SimulPit",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 2.587425345741212 0 1 0 17.25 0 a 8.62 2.587425345741212 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 5.90 A 2 2 0 0 0 18.10 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 5.90 A 2 2 0 0 1 18.10 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 0 12.00 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 1 12.00 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 5.90 A 2 2 0 0 0 5.90 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 5.90 A 2 2 0 0 1 5.90 18.10"
      }
    ]
  ]
};

export const SimulPit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0" />
      <path d="M 3.38 12.00 a 8.62 2.587425345741212 0 1 0 17.25 0 a 8.62 2.587425345741212 0 1 0 -17.25 0" />
      <path d="M 18.10 5.90 A 2 2 0 0 0 18.10 18.10" />
      <path d="M 18.10 5.90 A 2 2 0 0 1 18.10 18.10" />
      <path d="M 12.00 3.38 A 2 2 0 0 0 12.00 20.62" />
      <path d="M 12.00 3.38 A 2 2 0 0 1 12.00 20.62" />
      <path d="M 5.90 5.90 A 2 2 0 0 0 5.90 18.10" />
      <path d="M 5.90 5.90 A 2 2 0 0 1 5.90 18.10" />
      {children}
    </svg>
  );
});

export default SimulPit;

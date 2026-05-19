import React from 'react';

export const iconData = {
  "id": "SimulCove",
  "name": "SimulCove",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.15 12.00 a 9.85 9.85 0 1 0 19.69 0 a 9.85 9.85 0 1 0 -19.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.15 12.00 a 9.85 2.9538911354262383 0 1 0 19.69 0 a 9.85 2.9538911354262383 0 1 0 -19.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 3.47 A 2 2 0 0 0 16.92 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 3.47 A 2 2 0 0 1 16.92 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.47 A 2 2 0 0 0 7.08 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.47 A 2 2 0 0 1 7.08 20.53"
      }
    ]
  ]
};

export const SimulCove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.15 12.00 a 9.85 9.85 0 1 0 19.69 0 a 9.85 9.85 0 1 0 -19.69 0" />
      <path d="M 2.15 12.00 a 9.85 2.9538911354262383 0 1 0 19.69 0 a 9.85 2.9538911354262383 0 1 0 -19.69 0" />
      <path d="M 16.92 3.47 A 2 2 0 0 0 16.92 20.53" />
      <path d="M 16.92 3.47 A 2 2 0 0 1 16.92 20.53" />
      <path d="M 7.08 3.47 A 2 2 0 0 0 7.08 20.53" />
      <path d="M 7.08 3.47 A 2 2 0 0 1 7.08 20.53" />
      {children}
    </svg>
  );
});

export default SimulCove;

import React from 'react';

export const iconData = {
  "id": "MechaLord",
  "name": "MechaLord",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 12.00 a 6.45 6.45 0 1 1 12.90 0 a 6.45 6.45 0 1 1 -12.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.55 12.00 L 21.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 16.08 L 20.04 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 18.87 L 15.97 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 19.48 L 10.64 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 17.71 L 5.74 19.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 14.13 L 2.83 14.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 9.87 L 2.83 9.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 6.29 L 5.74 4.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.93 4.52 L 10.64 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 5.13 L 15.97 3.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 7.92 L 20.04 6.84"
      }
    ]
  ]
};

export const MechaLord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      <path d="M 5.55 12.00 a 6.45 6.45 0 1 1 12.90 0 a 6.45 6.45 0 1 1 -12.90 0" />
      <path d="M 19.55 12.00 L 21.55 12.00" />
      <path d="M 18.35 16.08 L 20.04 17.16" />
      <path d="M 15.14 18.87 L 15.97 20.69" />
      <path d="M 10.93 19.48 L 10.64 21.46" />
      <path d="M 7.05 17.71 L 5.74 19.22" />
      <path d="M 4.75 14.13 L 2.83 14.69" />
      <path d="M 4.75 9.87 L 2.83 9.31" />
      <path d="M 7.05 6.29 L 5.74 4.78" />
      <path d="M 10.93 4.52 L 10.64 2.54" />
      <path d="M 15.14 5.13 L 15.97 3.31" />
      <path d="M 18.35 7.92 L 20.04 6.84" />
      {children}
    </svg>
  );
});

export default MechaLord;

import React from 'react';

export const iconData = {
  "id": "JatoPerfume",
  "name": "JatoPerfume",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.50 21.30 C 14.43 18.98, 18.05 3.16, 11.71 7.37"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 15.86 L 10.29 3.09"
      }
    ],
    [
      "path",
      {
        "d": "M 10.63 19.23 A 4.81 6.57 125 0 1 8.50 9.01"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 11.85 C 10.41 15.69, 9.48 17.89, 11.70 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 20.66 L 4.63 2.88"
      }
    ]
  ]
};

export const JatoPerfume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.50 21.30 C 14.43 18.98, 18.05 3.16, 11.71 7.37" />
      <path d="M 20.97 15.86 L 10.29 3.09" />
      <path d="M 10.63 19.23 A 4.81 6.57 125 0 1 8.50 9.01" />
      <path d="M 16.24 11.85 C 10.41 15.69, 9.48 17.89, 11.70 15.90" />
      <path d="M 20.51 20.66 L 4.63 2.88" />
      {children}
    </svg>
  );
});

export default JatoPerfume;

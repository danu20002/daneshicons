import React from 'react';

export const iconData = {
  "id": "VellicoEngage",
  "name": "VellicoEngage",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.21 12.00 a 9.79 9.79 0 1 0 19.58 0 a 9.79 9.79 0 1 0 -19.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 6.13 a 7.83 2.3492495972290635 0 1 0 15.66 0 a 7.83 2.3492495972290635 0 1 0 -15.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.41 10.04 a 9.59 2.877231395825052 0 1 0 19.18 0 a 9.59 2.877231395825052 0 1 0 -19.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.41 13.96 a 9.59 2.877231395825052 0 1 0 19.18 0 a 9.59 2.877231395825052 0 1 0 -19.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 17.87 a 7.83 2.349249597229063 0 1 0 15.66 0 a 7.83 2.349249597229063 0 1 0 -15.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 0 12.00 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 1 12.00 21.79"
      }
    ]
  ]
};

export const VellicoEngage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.21 12.00 a 9.79 9.79 0 1 0 19.58 0 a 9.79 9.79 0 1 0 -19.58 0" />
      <path d="M 4.17 6.13 a 7.83 2.3492495972290635 0 1 0 15.66 0 a 7.83 2.3492495972290635 0 1 0 -15.66 0" />
      <path d="M 2.41 10.04 a 9.59 2.877231395825052 0 1 0 19.18 0 a 9.59 2.877231395825052 0 1 0 -19.18 0" />
      <path d="M 2.41 13.96 a 9.59 2.877231395825052 0 1 0 19.18 0 a 9.59 2.877231395825052 0 1 0 -19.18 0" />
      <path d="M 4.17 17.87 a 7.83 2.349249597229063 0 1 0 15.66 0 a 7.83 2.349249597229063 0 1 0 -15.66 0" />
      <path d="M 12.00 2.21 A 2 2 0 0 0 12.00 21.79" />
      <path d="M 12.00 2.21 A 2 2 0 0 1 12.00 21.79" />
      {children}
    </svg>
  );
});

export default VellicoEngage;

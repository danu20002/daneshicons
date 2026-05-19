import React from 'react';

export const iconData = {
  "id": "TroficoMica",
  "name": "TroficoMica",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.35 16.24 Q 15.81 19.67 3.98 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 21.90 13.80 L 7.40 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.93 19.17 L 12.75 20.78 L 13.86 7.87 L 12.87 18.36 L 11.64 4.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 2.48 C 9.79 12.99, 10.60 16.83, 6.33 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 10.34 A 4.43 2.58 39 0 1 18.41 9.62"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 5.06 A 6.11 2.89 167 0 0 19.91 6.22"
      }
    ]
  ]
};

export const TroficoMica = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.35 16.24 Q 15.81 19.67 3.98 9.17" />
      <path d="M 21.90 13.80 L 7.40 19.62" />
      <path d="M 20.93 19.17 L 12.75 20.78 L 13.86 7.87 L 12.87 18.36 L 11.64 4.55" />
      <path d="M 16.66 2.48 C 9.79 12.99, 10.60 16.83, 6.33 18.09" />
      <path d="M 2.37 10.34 A 4.43 2.58 39 0 1 18.41 9.62" />
      <path d="M 2.50 5.06 A 6.11 2.89 167 0 0 19.91 6.22" />
      {children}
    </svg>
  );
});

export default TroficoMica;

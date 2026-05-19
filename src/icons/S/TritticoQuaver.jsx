import React from 'react';

export const iconData = {
  "id": "TritticoQuaver",
  "name": "TritticoQuaver",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 12.00 a 7.47 7.47 0 1 0 14.93 0 a 7.47 7.47 0 1 0 -14.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 12.00 L 20.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 17.45 L 17.59 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 18.79 L 10.00 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 15.02 L 3.92 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 8.98 L 3.92 8.11"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 5.21 L 10.00 3.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 6.55 L 17.59 4.99"
      }
    ]
  ]
};

export const TritticoQuaver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 12.00 a 7.47 7.47 0 1 0 14.93 0 a 7.47 7.47 0 1 0 -14.93 0" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0" />
      <path d="M 18.97 12.00 L 20.97 12.00" />
      <path d="M 16.34 17.45 L 17.59 19.01" />
      <path d="M 10.45 18.79 L 10.00 20.74" />
      <path d="M 5.72 15.02 L 3.92 15.89" />
      <path d="M 5.72 8.98 L 3.92 8.11" />
      <path d="M 10.45 5.21 L 10.00 3.26" />
      <path d="M 16.34 6.55 L 17.59 4.99" />
      {children}
    </svg>
  );
});

export default TritticoQuaver;

import React from 'react';

export const iconData = {
  "id": "OrchidoDebris",
  "name": "OrchidoDebris",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.67 6.95 C 18.90 12.12, 19.03 5.60, 15.04 20.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 2.34 C 10.37 17.14, 6.79 13.31, 17.12 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 3.75 C 9.14 15.12, 9.22 16.29, 17.31 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 5.05 C 18.79 12.99, 4.23 8.50, 18.53 15.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 9.72 C 8.30 6.90, 15.18 18.02, 14.52 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 9.28 C 11.61 15.78, 19.38 13.06, 19.25 20.92"
      }
    ]
  ]
};

export const OrchidoDebris = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.67 6.95 C 18.90 12.12, 19.03 5.60, 15.04 20.15" />
      <path d="M 6.89 2.34 C 10.37 17.14, 6.79 13.31, 17.12 15.96" />
      <path d="M 9.87 3.75 C 9.14 15.12, 9.22 16.29, 17.31 18.52" />
      <path d="M 5.38 5.05 C 18.79 12.99, 4.23 8.50, 18.53 15.21" />
      <path d="M 7.18 9.72 C 8.30 6.90, 15.18 18.02, 14.52 15.41" />
      <path d="M 7.64 9.28 C 11.61 15.78, 19.38 13.06, 19.25 20.92" />
      {children}
    </svg>
  );
});

export default OrchidoDebris;

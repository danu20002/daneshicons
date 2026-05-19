import React from 'react';

export const iconData = {
  "id": "OrchidoMuseum",
  "name": "OrchidoMuseum",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.33 0 a 8.66 8.66 0 1 0 -17.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 7.67 a 7.50 2.2511837053837565 0 1 0 15.01 0 a 7.50 2.2511837053837565 0 1 0 -15.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 2.599443036597222 0 1 0 17.33 0 a 8.66 2.599443036597222 0 1 0 -17.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 16.33 a 7.50 2.2511837053837565 0 1 0 15.01 0 a 7.50 2.2511837053837565 0 1 0 -15.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 5.87 A 2 2 0 0 0 18.13 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 5.87 A 2 2 0 0 1 18.13 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.34 A 2 2 0 0 0 12.00 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.34 A 2 2 0 0 1 12.00 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 5.87 A 2 2 0 0 0 5.87 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 5.87 A 2 2 0 0 1 5.87 18.13"
      }
    ]
  ]
};

export const OrchidoMuseum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.33 0 a 8.66 8.66 0 1 0 -17.33 0" />
      <path d="M 4.50 7.67 a 7.50 2.2511837053837565 0 1 0 15.01 0 a 7.50 2.2511837053837565 0 1 0 -15.01 0" />
      <path d="M 3.34 12.00 a 8.66 2.599443036597222 0 1 0 17.33 0 a 8.66 2.599443036597222 0 1 0 -17.33 0" />
      <path d="M 4.50 16.33 a 7.50 2.2511837053837565 0 1 0 15.01 0 a 7.50 2.2511837053837565 0 1 0 -15.01 0" />
      <path d="M 18.13 5.87 A 2 2 0 0 0 18.13 18.13" />
      <path d="M 18.13 5.87 A 2 2 0 0 1 18.13 18.13" />
      <path d="M 12.00 3.34 A 2 2 0 0 0 12.00 20.66" />
      <path d="M 12.00 3.34 A 2 2 0 0 1 12.00 20.66" />
      <path d="M 5.87 5.87 A 2 2 0 0 0 5.87 18.13" />
      <path d="M 5.87 5.87 A 2 2 0 0 1 5.87 18.13" />
      {children}
    </svg>
  );
});

export default OrchidoMuseum;

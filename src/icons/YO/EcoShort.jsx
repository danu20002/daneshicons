import React from 'react';

export const iconData = {
  "id": "EcoShort",
  "name": "EcoShort",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 12.00 a 7.78 7.78 0 1 0 15.55 0 a 7.78 7.78 0 1 0 -15.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.81 12.00 a 5.19 5.19 0 1 1 10.38 0 a 5.19 5.19 0 1 1 -10.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.28 12.00 L 21.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 15.93 L 19.80 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.02 18.62 L 15.85 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 19.20 L 10.68 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 17.50 L 5.92 19.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 14.05 L 3.10 14.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 9.95 L 3.10 9.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 6.50 L 5.92 4.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 4.80 L 10.68 2.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.02 5.38 L 15.85 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 8.07 L 19.80 6.98"
      }
    ]
  ]
};

export const EcoShort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 12.00 a 7.78 7.78 0 1 0 15.55 0 a 7.78 7.78 0 1 0 -15.55 0" />
      <path d="M 6.81 12.00 a 5.19 5.19 0 1 1 10.38 0 a 5.19 5.19 0 1 1 -10.38 0" />
      <path d="M 19.28 12.00 L 21.28 12.00" />
      <path d="M 18.12 15.93 L 19.80 17.02" />
      <path d="M 15.02 18.62 L 15.85 20.44" />
      <path d="M 10.96 19.20 L 10.68 21.18" />
      <path d="M 7.23 17.50 L 5.92 19.01" />
      <path d="M 5.02 14.05 L 3.10 14.61" />
      <path d="M 5.02 9.95 L 3.10 9.39" />
      <path d="M 7.23 6.50 L 5.92 4.99" />
      <path d="M 10.96 4.80 L 10.68 2.82" />
      <path d="M 15.02 5.38 L 15.85 3.56" />
      <path d="M 18.12 8.07 L 19.80 6.98" />
      {children}
    </svg>
  );
});

export default EcoShort;

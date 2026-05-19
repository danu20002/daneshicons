import React from 'react';

export const iconData = {
  "id": "XericoRise",
  "name": "XericoRise",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 1 9.65 0 a 4.83 4.83 0 1 1 -9.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 12.00 L 21.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 15.79 L 19.58 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 14.91 18.38 L 15.74 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 18.94 L 10.72 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 17.30 L 6.10 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 13.98 L 3.35 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 10.02 L 3.35 9.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 6.70 L 6.10 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 5.06 L 10.72 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 14.91 5.62 L 15.74 3.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 8.21 L 19.58 7.13"
      }
    ]
  ]
};

export const XericoRise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 1 9.65 0 a 4.83 4.83 0 1 1 -9.65 0" />
      <path d="M 19.01 12.00 L 21.01 12.00" />
      <path d="M 17.90 15.79 L 19.58 16.87" />
      <path d="M 14.91 18.38 L 15.74 20.20" />
      <path d="M 11.00 18.94 L 10.72 20.92" />
      <path d="M 7.41 17.30 L 6.10 18.81" />
      <path d="M 5.27 13.98 L 3.35 14.54" />
      <path d="M 5.27 10.02 L 3.35 9.46" />
      <path d="M 7.41 6.70 L 6.10 5.19" />
      <path d="M 11.00 5.06 L 10.72 3.08" />
      <path d="M 14.91 5.62 L 15.74 3.80" />
      <path d="M 17.90 8.21 L 19.58 7.13" />
      {children}
    </svg>
  );
});

export default XericoRise;

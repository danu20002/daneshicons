import React from 'react';

export const iconData = {
  "id": "TaloSeries",
  "name": "TaloSeries",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.01 0 a 7.01 7.01 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 1 9.88 0 a 4.94 4.94 0 1 1 -9.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 12.00 L 20.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 17.09 L 17.30 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 18.34 L 10.11 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 14.82 L 4.34 15.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 9.18 L 4.34 8.31"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 5.66 L 10.11 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 6.91 L 17.30 5.35"
      }
    ]
  ]
};

export const TaloSeries = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.01 0 a 7.01 7.01 0 1 0 -14.01 0" />
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 1 9.88 0 a 4.94 4.94 0 1 1 -9.88 0" />
      <path d="M 18.51 12.00 L 20.51 12.00" />
      <path d="M 16.06 17.09 L 17.30 18.65" />
      <path d="M 10.55 18.34 L 10.11 20.29" />
      <path d="M 6.14 14.82 L 4.34 15.69" />
      <path d="M 6.14 9.18 L 4.34 8.31" />
      <path d="M 10.55 5.66 L 10.11 3.71" />
      <path d="M 16.06 6.91 L 17.30 5.35" />
      {children}
    </svg>
  );
});

export default TaloSeries;

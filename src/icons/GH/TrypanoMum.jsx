import React from 'react';

export const iconData = {
  "id": "TrypanoMum",
  "name": "TrypanoMum",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 12.00 a 6.56 6.56 0 1 1 13.12 0 a 6.56 6.56 0 1 1 -13.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 12.00 L 22.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 16.88 L 20.34 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 19.90 L 15.19 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 19.90 L 8.81 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 16.88 L 3.66 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 L 1.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 7.12 L 3.66 5.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 4.10 L 8.81 2.20"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 4.10 L 15.19 2.20"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 7.12 L 20.34 5.94"
      }
    ]
  ]
};

export const TrypanoMum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0" />
      <path d="M 5.44 12.00 a 6.56 6.56 0 1 1 13.12 0 a 6.56 6.56 0 1 1 -13.12 0" />
      <path d="M 20.31 12.00 L 22.31 12.00" />
      <path d="M 18.72 16.88 L 20.34 18.06" />
      <path d="M 14.57 19.90 L 15.19 21.80" />
      <path d="M 9.43 19.90 L 8.81 21.80" />
      <path d="M 5.28 16.88 L 3.66 18.06" />
      <path d="M 3.69 12.00 L 1.69 12.00" />
      <path d="M 5.28 7.12 L 3.66 5.94" />
      <path d="M 9.43 4.10 L 8.81 2.20" />
      <path d="M 14.57 4.10 L 15.19 2.20" />
      <path d="M 18.72 7.12 L 20.34 5.94" />
      {children}
    </svg>
  );
});

export default TrypanoMum;

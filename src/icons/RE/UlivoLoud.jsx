import React from 'react';

export const iconData = {
  "id": "UlivoLoud",
  "name": "UlivoLoud",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 12.00 a 9.70 9.70 0 1 0 19.40 0 a 9.70 9.70 0 1 0 -19.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 7.15 a 8.40 2.5206729656778246 0 1 0 16.80 0 a 8.40 2.5206729656778246 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 12.00 a 9.70 2.910622430546209 0 1 0 19.40 0 a 9.70 2.910622430546209 0 1 0 -19.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 16.85 a 8.40 2.5206729656778246 0 1 0 16.80 0 a 8.40 2.5206729656778246 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.30 A 2 2 0 0 0 12.00 21.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.30 A 2 2 0 0 1 12.00 21.70"
      }
    ]
  ]
};

export const UlivoLoud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 12.00 a 9.70 9.70 0 1 0 19.40 0 a 9.70 9.70 0 1 0 -19.40 0" />
      <path d="M 3.60 7.15 a 8.40 2.5206729656778246 0 1 0 16.80 0 a 8.40 2.5206729656778246 0 1 0 -16.80 0" />
      <path d="M 2.30 12.00 a 9.70 2.910622430546209 0 1 0 19.40 0 a 9.70 2.910622430546209 0 1 0 -19.40 0" />
      <path d="M 3.60 16.85 a 8.40 2.5206729656778246 0 1 0 16.80 0 a 8.40 2.5206729656778246 0 1 0 -16.80 0" />
      <path d="M 12.00 2.30 A 2 2 0 0 0 12.00 21.70" />
      <path d="M 12.00 2.30 A 2 2 0 0 1 12.00 21.70" />
      {children}
    </svg>
  );
});

export default UlivoLoud;

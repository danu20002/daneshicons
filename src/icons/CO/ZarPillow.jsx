import React from 'react';

export const iconData = {
  "id": "ZarPillow",
  "name": "ZarPillow",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.10 12.00 a 9.90 9.90 0 1 0 19.80 0 a 9.90 9.90 0 1 0 -19.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 6.06 a 7.92 2.3757216254621745 0 1 0 15.84 0 a 7.92 2.3757216254621745 0 1 0 -15.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 10.02 a 9.70 2.9096528766388876 0 1 0 19.40 0 a 9.70 2.9096528766388876 0 1 0 -19.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 13.98 a 9.70 2.9096528766388876 0 1 0 19.40 0 a 9.70 2.9096528766388876 0 1 0 -19.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 17.94 a 7.92 2.3757216254621745 0 1 0 15.84 0 a 7.92 2.3757216254621745 0 1 0 -15.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 0 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 3.43 A 2 2 0 0 1 16.95 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 0 7.05 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.43 A 2 2 0 0 1 7.05 20.57"
      }
    ]
  ]
};

export const ZarPillow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.10 12.00 a 9.90 9.90 0 1 0 19.80 0 a 9.90 9.90 0 1 0 -19.80 0" />
      <path d="M 4.08 6.06 a 7.92 2.3757216254621745 0 1 0 15.84 0 a 7.92 2.3757216254621745 0 1 0 -15.84 0" />
      <path d="M 2.30 10.02 a 9.70 2.9096528766388876 0 1 0 19.40 0 a 9.70 2.9096528766388876 0 1 0 -19.40 0" />
      <path d="M 2.30 13.98 a 9.70 2.9096528766388876 0 1 0 19.40 0 a 9.70 2.9096528766388876 0 1 0 -19.40 0" />
      <path d="M 4.08 17.94 a 7.92 2.3757216254621745 0 1 0 15.84 0 a 7.92 2.3757216254621745 0 1 0 -15.84 0" />
      <path d="M 16.95 3.43 A 2 2 0 0 0 16.95 20.57" />
      <path d="M 16.95 3.43 A 2 2 0 0 1 16.95 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 0 7.05 20.57" />
      <path d="M 7.05 3.43 A 2 2 0 0 1 7.05 20.57" />
      {children}
    </svg>
  );
});

export default ZarPillow;

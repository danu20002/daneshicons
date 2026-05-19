import React from 'react';

export const iconData = {
  "id": "VelenoMarket",
  "name": "VelenoMarket",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 6.11 a 7.85 2.354268015436828 0 1 0 15.70 0 a 7.85 2.354268015436828 0 1 0 -15.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 10.04 a 9.61 2.8833776777875095 0 1 0 19.22 0 a 9.61 2.8833776777875095 0 1 0 -19.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 13.96 a 9.61 2.8833776777875095 0 1 0 19.22 0 a 9.61 2.8833776777875095 0 1 0 -19.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 17.89 a 7.85 2.354268015436828 0 1 0 15.70 0 a 7.85 2.354268015436828 0 1 0 -15.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 3.50 A 2 2 0 0 0 16.90 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 3.50 A 2 2 0 0 1 16.90 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 3.50 A 2 2 0 0 0 7.10 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 3.50 A 2 2 0 0 1 7.10 20.50"
      }
    ]
  ]
};

export const VelenoMarket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0" />
      <path d="M 4.15 6.11 a 7.85 2.354268015436828 0 1 0 15.70 0 a 7.85 2.354268015436828 0 1 0 -15.70 0" />
      <path d="M 2.39 10.04 a 9.61 2.8833776777875095 0 1 0 19.22 0 a 9.61 2.8833776777875095 0 1 0 -19.22 0" />
      <path d="M 2.39 13.96 a 9.61 2.8833776777875095 0 1 0 19.22 0 a 9.61 2.8833776777875095 0 1 0 -19.22 0" />
      <path d="M 4.15 17.89 a 7.85 2.354268015436828 0 1 0 15.70 0 a 7.85 2.354268015436828 0 1 0 -15.70 0" />
      <path d="M 16.90 3.50 A 2 2 0 0 0 16.90 20.50" />
      <path d="M 16.90 3.50 A 2 2 0 0 1 16.90 20.50" />
      <path d="M 7.10 3.50 A 2 2 0 0 0 7.10 20.50" />
      <path d="M 7.10 3.50 A 2 2 0 0 1 7.10 20.50" />
      {children}
    </svg>
  );
});

export default VelenoMarket;

import React from 'react';

export const iconData = {
  "id": "ZampognaMarket",
  "name": "ZampognaMarket",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 a 7.07 7.07 0 1 0 14.14 0 a 7.07 7.07 0 1 0 -14.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const ZampognaMarket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0" stroke-dasharray="2 1" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0" stroke-dasharray="2 1" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 0 10.60 0 a 5.30 5.30 0 1 0 -10.60 0" stroke-dasharray="4 2" />
      <path d="M 4.93 12.00 a 7.07 7.07 0 1 0 14.14 0 a 7.07 7.07 0 1 0 -14.14 0" />
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.15 0 a 8.58 8.58 0 1 0 -17.15 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default ZampognaMarket;

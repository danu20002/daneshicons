import React from 'react';

export const iconData = {
  "id": "VenustoYield",
  "name": "VenustoYield",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 12.00 a 5.37 5.37 0 1 1 10.75 0 a 5.37 5.37 0 1 1 -10.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 12.00 L 20.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.35 15.89 L 18.97 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.04 18.29 L 14.66 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 18.29 L 9.34 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 15.89 L 5.03 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 12.00 L 3.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 8.11 L 5.03 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 5.71 L 9.34 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 14.04 5.71 L 14.66 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 17.35 8.11 L 18.97 6.94"
      }
    ]
  ]
};

export const VenustoYield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 0 14.23 0 a 7.12 7.12 0 1 0 -14.23 0" />
      <path d="M 6.63 12.00 a 5.37 5.37 0 1 1 10.75 0 a 5.37 5.37 0 1 1 -10.75 0" />
      <path d="M 18.62 12.00 L 20.62 12.00" />
      <path d="M 17.35 15.89 L 18.97 17.06" />
      <path d="M 14.04 18.29 L 14.66 20.19" />
      <path d="M 9.96 18.29 L 9.34 20.19" />
      <path d="M 6.65 15.89 L 5.03 17.06" />
      <path d="M 5.38 12.00 L 3.38 12.00" />
      <path d="M 6.65 8.11 L 5.03 6.94" />
      <path d="M 9.96 5.71 L 9.34 3.81" />
      <path d="M 14.04 5.71 L 14.66 3.81" />
      <path d="M 17.35 8.11 L 18.97 6.94" />
      {children}
    </svg>
  );
});

export default VenustoYield;

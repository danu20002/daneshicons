import React from 'react';

export const iconData = {
  "id": "VentaglioGlow",
  "name": "VentaglioGlow",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.67 0 a 7.83 7.83 0 1 0 -15.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 12.00 L 21.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 15.97 L 19.85 17.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 18.67 L 15.88 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 19.26 L 10.67 21.24"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 17.54 L 5.89 19.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 14.07 L 3.04 14.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 9.93 L 3.04 9.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 6.46 L 5.89 4.95"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 4.74 L 10.67 2.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 5.33 L 15.88 3.51"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 8.03 L 19.85 6.95"
      }
    ]
  ]
};

export const VentaglioGlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.67 0 a 7.83 7.83 0 1 0 -15.67 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 1 10.42 0 a 5.21 5.21 0 1 1 -10.42 0" />
      <path d="M 19.33 12.00 L 21.33 12.00" />
      <path d="M 18.17 15.97 L 19.85 17.05" />
      <path d="M 15.05 18.67 L 15.88 20.49" />
      <path d="M 10.96 19.26 L 10.67 21.24" />
      <path d="M 7.20 17.54 L 5.89 19.05" />
      <path d="M 4.96 14.07 L 3.04 14.63" />
      <path d="M 4.96 9.93 L 3.04 9.37" />
      <path d="M 7.20 6.46 L 5.89 4.95" />
      <path d="M 10.96 4.74 L 10.67 2.76" />
      <path d="M 15.05 5.33 L 15.88 3.51" />
      <path d="M 18.17 8.03 L 19.85 6.95" />
      {children}
    </svg>
  );
});

export default VentaglioGlow;

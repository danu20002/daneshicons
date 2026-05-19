import React from 'react';

export const iconData = {
  "id": "VersaleSavor",
  "name": "VersaleSavor",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.57 8.58 C 16.97 5.65, 17.90 12.77, 15.19 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.15 6.61 C 18.91 7.84, 9.58 7.31, 19.47 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 7.18 C 19.38 17.48, 5.76 17.53, 14.52 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 2.27 C 5.57 8.14, 10.94 6.18, 15.50 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 6.46 C 19.67 14.53, 17.50 15.51, 21.28 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 3.07 8.94 C 8.41 14.96, 11.90 14.83, 15.09 14.88"
      }
    ]
  ]
};

export const VersaleSavor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.57 8.58 C 16.97 5.65, 17.90 12.77, 15.19 18.87" />
      <path d="M 9.15 6.61 C 18.91 7.84, 9.58 7.31, 19.47 20.03" />
      <path d="M 7.66 7.18 C 19.38 17.48, 5.76 17.53, 14.52 20.97" />
      <path d="M 7.01 2.27 C 5.57 8.14, 10.94 6.18, 15.50 15.43" />
      <path d="M 7.11 6.46 C 19.67 14.53, 17.50 15.51, 21.28 21.41" />
      <path d="M 3.07 8.94 C 8.41 14.96, 11.90 14.83, 15.09 14.88" />
      {children}
    </svg>
  );
});

export default VersaleSavor;

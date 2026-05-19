import React from 'react';

export const iconData = {
  "id": "ViaggioTaxi",
  "name": "ViaggioTaxi",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.77 8.27 C 13.31 12.02, 11.87 8.28, 17.85 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 8.66 C 17.46 14.30, 13.13 19.25, 18.05 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 8.58 C 14.23 17.93, 14.33 17.84, 14.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 7.90 C 18.04 5.80, 18.09 8.84, 20.32 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 2.74 5.96 C 13.02 17.05, 18.12 8.02, 19.09 15.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 2.34 C 11.78 15.63, 15.07 6.96, 21.90 20.96"
      }
    ]
  ]
};

export const ViaggioTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.77 8.27 C 13.31 12.02, 11.87 8.28, 17.85 16.84" />
      <path d="M 7.43 8.66 C 17.46 14.30, 13.13 19.25, 18.05 16.05" />
      <path d="M 8.49 8.58 C 14.23 17.93, 14.33 17.84, 14.61 19.61" />
      <path d="M 9.22 7.90 C 18.04 5.80, 18.09 8.84, 20.32 17.93" />
      <path d="M 2.74 5.96 C 13.02 17.05, 18.12 8.02, 19.09 15.39" />
      <path d="M 6.58 2.34 C 11.78 15.63, 15.07 6.96, 21.90 20.96" />
      {children}
    </svg>
  );
});

export default ViaggioTaxi;

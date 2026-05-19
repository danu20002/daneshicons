import React from 'react';

export const iconData = {
  "id": "PolarisGroove",
  "name": "PolarisGroove",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 9.02 C 13.10 9.79, 8.92 18.66, 16.02 21.36"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 9.37 C 13.37 13.54, 17.74 13.00, 14.03 17.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 8.97 C 15.76 8.53, 18.96 17.99, 14.17 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 4.04 C 9.88 14.62, 7.08 15.54, 21.60 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 9.42 C 13.34 8.62, 5.44 12.69, 17.69 15.88"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 8.84 C 11.04 14.91, 14.09 19.22, 14.23 14.45"
      }
    ]
  ]
};

export const PolarisGroove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 9.02 C 13.10 9.79, 8.92 18.66, 16.02 21.36" />
      <path d="M 8.39 9.37 C 13.37 13.54, 17.74 13.00, 14.03 17.10" />
      <path d="M 4.60 8.97 C 15.76 8.53, 18.96 17.99, 14.17 17.01" />
      <path d="M 3.17 4.04 C 9.88 14.62, 7.08 15.54, 21.60 16.69" />
      <path d="M 5.39 9.42 C 13.34 8.62, 5.44 12.69, 17.69 15.88" />
      <path d="M 3.13 8.84 C 11.04 14.91, 14.09 19.22, 14.23 14.45" />
      {children}
    </svg>
  );
});

export default PolarisGroove;

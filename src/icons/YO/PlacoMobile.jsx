import React from 'react';

export const iconData = {
  "id": "PlacoMobile",
  "name": "PlacoMobile",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 12.00 a 5.10 5.10 0 1 1 10.20 0 a 5.10 5.10 0 1 1 -10.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 12.00 L 20.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.29 15.85 L 18.91 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 14.02 18.22 L 14.64 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.98 18.22 L 9.36 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 15.85 L 5.09 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 L 3.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 8.15 L 5.09 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 9.98 5.78 L 9.36 3.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.02 5.78 L 14.64 3.88"
      }
    ],
    [
      "path",
      {
        "d": "M 17.29 8.15 L 18.91 6.98"
      }
    ]
  ]
};

export const PlacoMobile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" />
      <path d="M 6.90 12.00 a 5.10 5.10 0 1 1 10.20 0 a 5.10 5.10 0 1 1 -10.20 0" />
      <path d="M 18.54 12.00 L 20.54 12.00" />
      <path d="M 17.29 15.85 L 18.91 17.02" />
      <path d="M 14.02 18.22 L 14.64 20.12" />
      <path d="M 9.98 18.22 L 9.36 20.12" />
      <path d="M 6.71 15.85 L 5.09 17.02" />
      <path d="M 5.46 12.00 L 3.46 12.00" />
      <path d="M 6.71 8.15 L 5.09 6.98" />
      <path d="M 9.98 5.78 L 9.36 3.88" />
      <path d="M 14.02 5.78 L 14.64 3.88" />
      <path d="M 17.29 8.15 L 18.91 6.98" />
      {children}
    </svg>
  );
});

export default PlacoMobile;

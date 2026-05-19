import React from 'react';

export const iconData = {
  "id": "RemoSystem",
  "name": "RemoSystem",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 12.00 a 7.60 7.60 0 1 0 15.20 0 a 7.60 7.60 0 1 0 -15.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 1 11.17 0 a 5.58 5.58 0 1 1 -11.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.10 12.00 L 21.10 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 15.84 L 19.66 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 18.46 L 15.78 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.99 19.03 L 10.70 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 17.37 L 6.04 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 14.00 L 3.27 14.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 10.00 L 3.27 9.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 6.63 L 6.04 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 10.99 4.97 L 10.70 2.99"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 5.54 L 15.78 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 8.16 L 19.66 7.08"
      }
    ]
  ]
};

export const RemoSystem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 12.00 a 7.60 7.60 0 1 0 15.20 0 a 7.60 7.60 0 1 0 -15.20 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 1 11.17 0 a 5.58 5.58 0 1 1 -11.17 0" />
      <path d="M 19.10 12.00 L 21.10 12.00" />
      <path d="M 17.97 15.84 L 19.66 16.92" />
      <path d="M 14.95 18.46 L 15.78 20.28" />
      <path d="M 10.99 19.03 L 10.70 21.01" />
      <path d="M 7.35 17.37 L 6.04 18.88" />
      <path d="M 5.19 14.00 L 3.27 14.56" />
      <path d="M 5.19 10.00 L 3.27 9.44" />
      <path d="M 7.35 6.63 L 6.04 5.12" />
      <path d="M 10.99 4.97 L 10.70 2.99" />
      <path d="M 14.95 5.54 L 15.78 3.72" />
      <path d="M 17.97 8.16 L 19.66 7.08" />
      {children}
    </svg>
  );
});

export default RemoSystem;

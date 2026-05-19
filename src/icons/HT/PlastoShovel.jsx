import React from 'react';

export const iconData = {
  "id": "PlastoShovel",
  "name": "PlastoShovel",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 12.00 a 7.62 7.62 0 1 0 15.25 0 a 7.62 7.62 0 1 0 -15.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 12.00 a 6.04 6.04 0 1 1 12.09 0 a 6.04 6.04 0 1 1 -12.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 12.00 L 21.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 15.56 L 19.90 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 15.56 18.17 L 16.56 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.12 L 12.00 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 18.17 L 7.44 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 15.56 L 4.10 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 12.00 L 2.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 8.44 L 4.10 7.44"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 5.83 L 7.44 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.88 L 12.00 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 15.56 5.83 L 16.56 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 8.44 L 19.90 7.44"
      }
    ]
  ]
};

export const PlastoShovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 12.00 a 7.62 7.62 0 1 0 15.25 0 a 7.62 7.62 0 1 0 -15.25 0" />
      <path d="M 5.96 12.00 a 6.04 6.04 0 1 1 12.09 0 a 6.04 6.04 0 1 1 -12.09 0" />
      <path d="M 19.12 12.00 L 21.12 12.00" />
      <path d="M 18.17 15.56 L 19.90 16.56" />
      <path d="M 15.56 18.17 L 16.56 19.90" />
      <path d="M 12.00 19.12 L 12.00 21.12" />
      <path d="M 8.44 18.17 L 7.44 19.90" />
      <path d="M 5.83 15.56 L 4.10 16.56" />
      <path d="M 4.88 12.00 L 2.88 12.00" />
      <path d="M 5.83 8.44 L 4.10 7.44" />
      <path d="M 8.44 5.83 L 7.44 4.10" />
      <path d="M 12.00 4.88 L 12.00 2.88" />
      <path d="M 15.56 5.83 L 16.56 4.10" />
      <path d="M 18.17 8.44 L 19.90 7.44" />
      {children}
    </svg>
  );
});

export default PlastoShovel;

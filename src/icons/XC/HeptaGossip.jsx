import React from 'react';

export const iconData = {
  "id": "HeptaGossip",
  "name": "HeptaGossip",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 8.74 0 1 0 17.49 0 a 8.74 8.74 0 1 0 -17.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 12.00 L 22.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 16.12 L 20.87 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 19.14 L 17.12 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.24 L 12.00 22.24"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 19.14 L 6.88 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 16.12 L 3.13 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 12.00 L 1.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 7.88 L 3.13 6.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.86 L 6.88 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.76 L 12.00 1.76"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.86 L 17.12 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 7.88 L 20.87 6.88"
      }
    ]
  ]
};

export const HeptaGossip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 12.00 a 8.74 8.74 0 1 0 17.49 0 a 8.74 8.74 0 1 0 -17.49 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 1 12.04 0 a 6.02 6.02 0 1 1 -12.04 0" />
      <path d="M 20.24 12.00 L 22.24 12.00" />
      <path d="M 19.14 16.12 L 20.87 17.12" />
      <path d="M 16.12 19.14 L 17.12 20.87" />
      <path d="M 12.00 20.24 L 12.00 22.24" />
      <path d="M 7.88 19.14 L 6.88 20.87" />
      <path d="M 4.86 16.12 L 3.13 17.12" />
      <path d="M 3.76 12.00 L 1.76 12.00" />
      <path d="M 4.86 7.88 L 3.13 6.88" />
      <path d="M 7.88 4.86 L 6.88 3.13" />
      <path d="M 12.00 3.76 L 12.00 1.76" />
      <path d="M 16.12 4.86 L 17.12 3.13" />
      <path d="M 19.14 7.88 L 20.87 6.88" />
      {children}
    </svg>
  );
});

export default HeptaGossip;

import React from 'react';

export const iconData = {
  "id": "VeteroMethod",
  "name": "VeteroMethod",
  "category": "UE",
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
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 1 11.21 0 a 5.61 5.61 0 1 1 -11.21 0"
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
        "d": "M 18.15 15.55 L 19.88 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.55 18.15 L 16.55 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.10 L 12.00 21.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 18.15 L 7.45 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 15.55 L 4.12 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 12.00 L 2.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 8.45 L 4.12 7.45"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 5.85 L 7.45 4.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.90 L 12.00 2.90"
      }
    ],
    [
      "path",
      {
        "d": "M 15.55 5.85 L 16.55 4.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.15 8.45 L 19.88 7.45"
      }
    ]
  ]
};

export const VeteroMethod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 1 11.21 0 a 5.61 5.61 0 1 1 -11.21 0" />
      <path d="M 19.10 12.00 L 21.10 12.00" />
      <path d="M 18.15 15.55 L 19.88 16.55" />
      <path d="M 15.55 18.15 L 16.55 19.88" />
      <path d="M 12.00 19.10 L 12.00 21.10" />
      <path d="M 8.45 18.15 L 7.45 19.88" />
      <path d="M 5.85 15.55 L 4.12 16.55" />
      <path d="M 4.90 12.00 L 2.90 12.00" />
      <path d="M 5.85 8.45 L 4.12 7.45" />
      <path d="M 8.45 5.85 L 7.45 4.12" />
      <path d="M 12.00 4.90 L 12.00 2.90" />
      <path d="M 15.55 5.85 L 16.55 4.12" />
      <path d="M 18.15 8.45 L 19.88 7.45" />
      {children}
    </svg>
  );
});

export default VeteroMethod;

import React from 'react';

export const iconData = {
  "id": "SummoSolid",
  "name": "SummoSolid",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.21 0 a 8.11 8.11 0 1 0 -16.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 12.00 a 6.50 6.50 0 1 1 13.01 0 a 6.50 6.50 0 1 1 -13.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.61 12.00 L 21.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 15.80 L 20.32 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 15.80 18.59 L 16.80 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.61 L 12.00 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 18.59 L 7.20 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 15.80 L 3.68 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 12.00 L 2.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 8.20 L 3.68 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 5.41 L 7.20 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.39 L 12.00 2.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.80 5.41 L 16.80 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 8.20 L 20.32 7.20"
      }
    ]
  ]
};

export const SummoSolid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.21 0 a 8.11 8.11 0 1 0 -16.21 0" />
      <path d="M 5.50 12.00 a 6.50 6.50 0 1 1 13.01 0 a 6.50 6.50 0 1 1 -13.01 0" />
      <path d="M 19.61 12.00 L 21.61 12.00" />
      <path d="M 18.59 15.80 L 20.32 16.80" />
      <path d="M 15.80 18.59 L 16.80 20.32" />
      <path d="M 12.00 19.61 L 12.00 21.61" />
      <path d="M 8.20 18.59 L 7.20 20.32" />
      <path d="M 5.41 15.80 L 3.68 16.80" />
      <path d="M 4.39 12.00 L 2.39 12.00" />
      <path d="M 5.41 8.20 L 3.68 7.20" />
      <path d="M 8.20 5.41 L 7.20 3.68" />
      <path d="M 12.00 4.39 L 12.00 2.39" />
      <path d="M 15.80 5.41 L 16.80 3.68" />
      <path d="M 18.59 8.20 L 20.32 7.20" />
      {children}
    </svg>
  );
});

export default SummoSolid;

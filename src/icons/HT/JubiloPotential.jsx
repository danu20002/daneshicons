import React from 'react';

export const iconData = {
  "id": "JubiloPotential",
  "name": "JubiloPotential",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.00 a 5.38 5.38 0 1 1 10.77 0 a 5.38 5.38 0 1 1 -10.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 12.00 L 21.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 15.83 L 20.37 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 18.63 L 16.83 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.66 L 12.00 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 18.63 L 7.17 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 15.83 L 3.63 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 12.00 L 2.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 8.17 L 3.63 7.17"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 5.37 L 7.17 3.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.34 L 12.00 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 5.37 L 16.83 3.63"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 8.17 L 20.37 7.17"
      }
    ]
  ]
};

export const JubiloPotential = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0" />
      <path d="M 6.62 12.00 a 5.38 5.38 0 1 1 10.77 0 a 5.38 5.38 0 1 1 -10.77 0" />
      <path d="M 19.66 12.00 L 21.66 12.00" />
      <path d="M 18.63 15.83 L 20.37 16.83" />
      <path d="M 15.83 18.63 L 16.83 20.37" />
      <path d="M 12.00 19.66 L 12.00 21.66" />
      <path d="M 8.17 18.63 L 7.17 20.37" />
      <path d="M 5.37 15.83 L 3.63 16.83" />
      <path d="M 4.34 12.00 L 2.34 12.00" />
      <path d="M 5.37 8.17 L 3.63 7.17" />
      <path d="M 8.17 5.37 L 7.17 3.63" />
      <path d="M 12.00 4.34 L 12.00 2.34" />
      <path d="M 15.83 5.37 L 16.83 3.63" />
      <path d="M 18.63 8.17 L 20.37 7.17" />
      {children}
    </svg>
  );
});

export default JubiloPotential;

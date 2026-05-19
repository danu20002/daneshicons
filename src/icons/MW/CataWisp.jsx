import React from 'react';

export const iconData = {
  "id": "CataWisp",
  "name": "CataWisp",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.64 12.00 a 5.36 5.36 0 1 1 10.72 0 a 5.36 5.36 0 1 1 -10.72 0"
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
        "d": "M 18.59 15.81 L 20.32 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 15.81 18.59 L 16.81 20.32"
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
        "d": "M 8.19 18.59 L 7.19 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 15.81 L 3.68 16.81"
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
        "d": "M 5.41 8.19 L 3.68 7.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 5.41 L 7.19 3.68"
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
        "d": "M 15.81 5.41 L 16.81 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 8.19 L 20.32 7.19"
      }
    ]
  ]
};

export const CataWisp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0" />
      <path d="M 6.64 12.00 a 5.36 5.36 0 1 1 10.72 0 a 5.36 5.36 0 1 1 -10.72 0" />
      <path d="M 19.61 12.00 L 21.61 12.00" />
      <path d="M 18.59 15.81 L 20.32 16.81" />
      <path d="M 15.81 18.59 L 16.81 20.32" />
      <path d="M 12.00 19.61 L 12.00 21.61" />
      <path d="M 8.19 18.59 L 7.19 20.32" />
      <path d="M 5.41 15.81 L 3.68 16.81" />
      <path d="M 4.39 12.00 L 2.39 12.00" />
      <path d="M 5.41 8.19 L 3.68 7.19" />
      <path d="M 8.19 5.41 L 7.19 3.68" />
      <path d="M 12.00 4.39 L 12.00 2.39" />
      <path d="M 15.81 5.41 L 16.81 3.68" />
      <path d="M 18.59 8.19 L 20.32 7.19" />
      {children}
    </svg>
  );
});

export default CataWisp;

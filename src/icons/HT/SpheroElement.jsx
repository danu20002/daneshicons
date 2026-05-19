import React from 'react';

export const iconData = {
  "id": "SpheroElement",
  "name": "SpheroElement",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 12.00 a 6.83 6.83 0 1 1 13.67 0 a 6.83 6.83 0 1 1 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 12.00 L 21.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 15.92 L 20.52 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 15.92 18.79 L 16.92 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.84 L 12.00 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 18.79 L 7.08 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 15.92 L 3.48 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 12.00 L 2.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 8.08 L 3.48 7.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 5.21 L 7.08 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.16 L 12.00 2.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.92 5.21 L 16.92 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 8.08 L 20.52 7.08"
      }
    ]
  ]
};

export const SpheroElement = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0" />
      <path d="M 5.17 12.00 a 6.83 6.83 0 1 1 13.67 0 a 6.83 6.83 0 1 1 -13.67 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 18.79 15.92 L 20.52 16.92" />
      <path d="M 15.92 18.79 L 16.92 20.52" />
      <path d="M 12.00 19.84 L 12.00 21.84" />
      <path d="M 8.08 18.79 L 7.08 20.52" />
      <path d="M 5.21 15.92 L 3.48 16.92" />
      <path d="M 4.16 12.00 L 2.16 12.00" />
      <path d="M 5.21 8.08 L 3.48 7.08" />
      <path d="M 8.08 5.21 L 7.08 3.48" />
      <path d="M 12.00 4.16 L 12.00 2.16" />
      <path d="M 15.92 5.21 L 16.92 3.48" />
      <path d="M 18.79 8.08 L 20.52 7.08" />
      {children}
    </svg>
  );
});

export default SpheroElement;

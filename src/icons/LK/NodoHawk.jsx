import React from 'react';

export const iconData = {
  "id": "NodoHawk",
  "name": "NodoHawk",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.67 0 a 8.34 8.34 0 1 0 -16.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 12.00 a 5.76 5.76 0 1 1 11.53 0 a 5.76 5.76 0 1 1 -11.53 0"
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
        "d": "M 15.92 18.79 L 16.92 20.52"
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
        "d": "M 4.16 12.00 L 2.16 12.00"
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
        "d": "M 15.92 5.21 L 16.92 3.48"
      }
    ]
  ]
};

export const NodoHawk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.67 0 a 8.34 8.34 0 1 0 -16.67 0" />
      <path d="M 6.24 12.00 a 5.76 5.76 0 1 1 11.53 0 a 5.76 5.76 0 1 1 -11.53 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 15.92 18.79 L 16.92 20.52" />
      <path d="M 8.08 18.79 L 7.08 20.52" />
      <path d="M 4.16 12.00 L 2.16 12.00" />
      <path d="M 8.08 5.21 L 7.08 3.48" />
      <path d="M 15.92 5.21 L 16.92 3.48" />
      {children}
    </svg>
  );
});

export default NodoHawk;
